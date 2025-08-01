#!/usr/bin/env python3
"""
Utility script to add attribution to markdown files based on git history.
Created for SEAL Security Frameworks project.
"""

import json
import subprocess
import re
import os
from pathlib import Path

def get_git_contributors(filepath):
    """Get contributors for a specific file from git history."""
    try:
        # Get git log for the file
        result = subprocess.run([
            'git', 'log', '--pretty=format:%an <%ae>', '--', filepath
        ], capture_output=True, text=True, cwd='.')
        
        if result.returncode != 0:
            return []
        
        # Parse contributors
        contributors = {}
        for line in result.stdout.strip().split('\n'):
            if line:
                name_email = line.strip()
                contributors[name_email] = contributors.get(name_email, 0) + 1
        
        return sorted(contributors.items(), key=lambda x: x[1], reverse=True)
    except Exception as e:
        print(f"Error getting git contributors for {filepath}: {e}")
        return []

def load_contributors_db():
    """Load the contributors database."""
    try:
        with open('src/config/contributors.json', 'r') as f:
            return json.load(f)
    except Exception as e:
        print(f"Error loading contributors.json: {e}")
        return []

def map_email_to_slug(email, contributors_db):
    """Map an email address to a contributor slug."""
    for contributor in contributors_db:
        if contributor.get('github') and email in contributor.get('github', ''):
            return contributor['slug']
        # Try to match by email patterns
        if 'matt@theredguild.org' in email:
            return 'mattaereal'
        elif 'fredrik@ethereum.org' in email:
            return 'fredriksvantes'
        elif 'trebor.ahwcam@gmail.com' in email:
            return 'robert'
    return None

def add_attribution_to_file(filepath, contributors):
    """Add attribution to a markdown file."""
    try:
        with open(filepath, 'r') as f:
            content = f.read()
        
        # Check if file already has contributors
        if 'contributors:' in content:
            print(f"File {filepath} already has attribution")
            return False
        
        # Find the end of frontmatter
        lines = content.split('\n')
        if lines[0] != '---':
            print(f"File {filepath} doesn't have frontmatter")
            return False
        
        # Find the closing ---
        end_frontmatter = None
        for i, line in enumerate(lines[1:], 1):
            if line == '---':
                end_frontmatter = i
                break
        
        if end_frontmatter is None:
            print(f"File {filepath} has malformed frontmatter")
            return False
        
        # Create contributors section
        contributors_yaml = ['contributors:']
        if len(contributors) == 1:
            contributors_yaml.extend([
                '  - role: wrote',
                f'    users: [{contributors[0]}]'
            ])
        else:
            contributors_yaml.extend([
                '  - role: wrote',
                f'    users: [{", ".join(contributors)}]'
            ])
        
        # Insert contributors before the closing ---
        new_lines = (
            lines[:end_frontmatter] + 
            contributors_yaml + 
            lines[end_frontmatter:]
        )
        
        # Write back to file
        with open(filepath, 'w') as f:
            f.write('\n'.join(new_lines))
        
        print(f"Added attribution to {filepath}: {contributors}")
        return True
    
    except Exception as e:
        print(f"Error adding attribution to {filepath}: {e}")
        return False

def main():
    """Main function to process files."""
    contributors_db = load_contributors_db()
    
    # Example usage - can be modified for batch processing
    filepath = input("Enter filepath to add attribution to: ")
    
    if not os.path.exists(filepath):
        print(f"File {filepath} does not exist")
        return
    
    # Get git contributors
    git_contributors = get_git_contributors(filepath)
    
    if not git_contributors:
        print(f"No git contributors found for {filepath}")
        return
    
    print(f"Git contributors for {filepath}:")
    for contributor, count in git_contributors:
        print(f"  {contributor}: {count} commits")
    
    # Map to slugs
    contributor_slugs = []
    for contributor, count in git_contributors:
        slug = map_email_to_slug(contributor, contributors_db)
        if slug and slug not in contributor_slugs:
            contributor_slugs.append(slug)
    
    if not contributor_slugs:
        print("No contributor slugs found")
        return
    
    print(f"Mapped contributors: {contributor_slugs}")
    
    # Add attribution
    success = add_attribution_to_file(filepath, contributor_slugs)
    if success:
        print("Attribution added successfully!")
    else:
        print("Failed to add attribution")

if __name__ == "__main__":
    main()