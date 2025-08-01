#!/usr/bin/env python3
"""
Script to analyze git history and suggest contributors for markdown files missing attribution.
"""

import os
import subprocess
import json
import re
from collections import defaultdict, Counter
from pathlib import Path

def get_files_without_contributors():
    """Find all markdown files in src/ that don't have contributors in frontmatter."""
    result = subprocess.run(
        ['find', 'src', '-name', '*.md', '-exec', 'grep', '-L', 'contributors:', '{}', ';'],
        capture_output=True, text=True, cwd='/home/irk/seal/fworks'
    )
    if result.returncode != 0:
        print("Error finding files without contributors")
        return []
    
    files = [f.strip() for f in result.stdout.strip().split('\n') if f.strip()]
    return files

def get_git_contributors(filepath):
    """Get git contributors for a specific file with commit counts."""
    try:
        # Get contributors with commit count
        result = subprocess.run(
            ['git', 'log', '--pretty=format:%an <%ae>', '--follow', filepath],
            capture_output=True, text=True, cwd='/home/irk/seal/fworks'
        )
        
        if result.returncode != 0:
            return []
            
        contributors = []
        for line in result.stdout.strip().split('\n'):
            if line.strip():
                contributors.append(line.strip())
        
        # Count occurrences
        contributor_counts = Counter(contributors)
        return contributor_counts.most_common()
        
    except Exception as e:
        print(f"Error getting git contributors for {filepath}: {e}")
        return []

def get_commit_details(filepath):
    """Get detailed commit information to filter out minor commits."""
    try:
        result = subprocess.run(
            ['git', 'log', '--oneline', '--follow', filepath],
            capture_output=True, text=True, cwd='/home/irk/seal/fworks'
        )
        
        if result.returncode != 0:
            return []
            
        commits = []
        for line in result.stdout.strip().split('\n'):
            if line.strip():
                commits.append(line.strip())
        
        return commits
        
    except Exception as e:
        print(f"Error getting commit details for {filepath}: {e}")
        return []

def is_minor_commit(commit_message):
    """Check if a commit is likely a minor change that shouldn't count for attribution."""
    minor_patterns = [
        r'tag',
        r'typo',
        r'fix typo',
        r'formatting',
        r'style',
        r'minor',
        r'whitespace',
        r'lint',
        r'frontmatter',
        r'yaml',
        r'regeneration',
        r'build',
        r'automated',
        r'bot',
        r'ci',
        r'merge',
        r'bump',
        r'version',
        r'gitignore',
        r'readme only',
        r'doc fix',
        r'docs',
        r'comment',
        r'cleanup'
    ]
    
    message_lower = commit_message.lower()
    return any(re.search(pattern, message_lower) for pattern in minor_patterns)

def load_contributors_db():
    """Load the contributors database."""
    try:
        with open('/home/irk/seal/fworks/src/config/contributors.json', 'r') as f:
            return json.load(f)
    except Exception as e:
        print(f"Error loading contributors database: {e}")
        return []

def map_email_to_contributor(email, contributors_db):
    """Map email address to contributor slug."""
    # Create mapping from various email formats to slugs
    email_mappings = {
        'matt@theredguild.org': 'mattaereal',
        '388605+mattaereal@users.noreply.github.com': 'mattaereal',
        'fredrik@ethereum.org': 'fredriksvantes',
        'trebor.ahwcam@gmail.com': 'robert',
        'ethzed@sigmaprime.io': 'zedt3ster',
        'drew@pocketuniverse.app': 'nftdreww',
        'ghadi@justalab.co': 'ghadi8',
        'pinalikefruit@coinspect.com': 'pinalikefruit',
        'tebayoso@theredguild.org': 'tebayoso',
        'engn33r@protonmail.com': 'engn33r'
    }
    
    # Direct mapping
    if email in email_mappings:
        return email_mappings[email]
    
    # Try to find by partial match or GitHub username
    for contrib in contributors_db:
        if contrib.get('github'):
            github_username = contrib['github'].split('/')[-1].lower()
            if github_username in email.lower():
                return contrib['slug']
    
    return None

def analyze_file_contributors(filepath, contributors_db):
    """Analyze a single file and suggest contributors."""
    print(f"Analyzing: {filepath}")
    
    # Get git contributors
    git_contributors = get_git_contributors(filepath)
    commit_details = get_commit_details(filepath)
    
    if not git_contributors:
        return None
    
    # Filter out minor commits by analyzing commit messages
    substantial_commits = []
    minor_commits = []
    
    for commit in commit_details:
        if is_minor_commit(commit):
            minor_commits.append(commit)
        else:
            substantial_commits.append(commit)
    
    # Get detailed contributor analysis
    try:
        # Get contributors for substantial commits only
        result = subprocess.run(
            ['git', 'log', '--pretty=format:%an <%ae>', '--follow', filepath],
            capture_output=True, text=True, cwd='/home/irk/seal/fworks'
        )
        
        if result.returncode != 0:
            return None
            
        # Get all commit info with messages
        detailed_result = subprocess.run(
            ['git', 'log', '--pretty=format:%an <%ae>|%s', '--follow', filepath],
            capture_output=True, text=True, cwd='/home/irk/seal/fworks'
        )
        
        substantial_contributors = Counter()
        minor_contributors = Counter()
        
        for line in detailed_result.stdout.strip().split('\n'):
            if '|' in line:
                author_email, message = line.split('|', 1)
                if is_minor_commit(message):
                    minor_contributors[author_email] += 1
                else:
                    substantial_contributors[author_email] += 1
        
    except Exception as e:
        print(f"Error analyzing substantial commits for {filepath}: {e}")
        substantial_contributors = Counter()
        for contributor, count in git_contributors:
            substantial_contributors[contributor] = count
    
    # Map to contributor slugs
    suggested_contributors = []
    
    for contributor, count in substantial_contributors.most_common():
        # Extract email from "Name <email>" format
        email_match = re.search(r'<([^>]+)>', contributor)
        if email_match:
            email = email_match.group(1)
            slug = map_email_to_contributor(email, contributors_db)
            if slug:
                suggested_contributors.append({
                    'slug': slug,
                    'name': contributor.split('<')[0].strip(),
                    'email': email,
                    'substantial_commits': count,
                    'minor_commits': minor_contributors.get(contributor, 0)
                })
    
    if not suggested_contributors:
        return None
    
    # Determine roles based on contribution patterns
    result = {
        'file': filepath,
        'total_commits': len(commit_details),
        'substantial_commits': len(substantial_commits),
        'minor_commits': len(minor_commits),
        'suggested_contributors': suggested_contributors
    }
    
    # Suggest roles
    if len(suggested_contributors) == 1:
        result['suggested_frontmatter'] = f"""contributors:
  - role: wrote
    users: [{suggested_contributors[0]['slug']}]"""
    else:
        # Primary author (most substantial commits)
        primary = suggested_contributors[0]
        others = suggested_contributors[1:]
        
        if primary['substantial_commits'] > sum(c['substantial_commits'] for c in others):
            # Clear primary author
            result['suggested_frontmatter'] = f"""contributors:
  - role: wrote
    users: [{primary['slug']}]"""
            if others:
                other_slugs = [c['slug'] for c in others if c['substantial_commits'] > 0]
                if other_slugs:
                    result['suggested_frontmatter'] += f"""
  - role: reviewed
    users: [{', '.join(other_slugs)}]"""
        else:
            # Multiple significant contributors
            all_slugs = [c['slug'] for c in suggested_contributors if c['substantial_commits'] > 0]
            result['suggested_frontmatter'] = f"""contributors:
  - role: wrote
    users: [{', '.join(all_slugs)}]"""
    
    return result

def main():
    """Main function to analyze all files and generate attribution report."""
    os.chdir('/home/irk/seal/fworks')
    
    print("Loading contributors database...")
    contributors_db = load_contributors_db()
    
    print("Finding files without contributors...")
    files_without_contributors = get_files_without_contributors()
    
    print(f"Found {len(files_without_contributors)} files without contributors")
    
    # Analyze each file
    results = []
    
    for i, filepath in enumerate(files_without_contributors):
        print(f"\n[{i+1}/{len(files_without_contributors)}] Analyzing {filepath}")
        
        result = analyze_file_contributors(filepath, contributors_db)
        if result:
            results.append(result)
    
    # Generate report
    print("\n" + "="*80)
    print("ATTRIBUTION ANALYSIS REPORT")
    print("="*80)
    
    for result in results:
        print(f"\nFile: {result['file']}")
        print(f"Total commits: {result['total_commits']}")
        print(f"Substantial commits: {result['substantial_commits']}")
        print(f"Minor commits: {result['minor_commits']}")
        print("Contributors:")
        for contrib in result['suggested_contributors']:
            print(f"  - {contrib['name']} ({contrib['slug']}): {contrib['substantial_commits']} substantial, {contrib['minor_commits']} minor")
        print("Suggested frontmatter:")
        print(result['suggested_frontmatter'])
        print("-" * 40)
    
    # Save results to JSON for further processing
    with open('/home/irk/seal/fworks/attribution_analysis.json', 'w') as f:
        json.dump(results, f, indent=2)
    
    print(f"\nResults saved to attribution_analysis.json")
    print(f"Analyzed {len(results)} files with suggested contributors")

if __name__ == "__main__":
    main()