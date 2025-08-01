#!/usr/bin/env python3
"""
Generate a structured summary of the attribution analysis for easy implementation.
"""

import json
from collections import defaultdict, Counter

def load_results():
    """Load the attribution analysis results."""
    with open('/home/irk/seal/fworks/attribution_analysis.json', 'r') as f:
        return json.load(f)

def generate_summary(results):
    """Generate a structured summary of the analysis."""
    
    # Summary statistics
    total_files = len(results)
    contributor_frequency = Counter()
    framework_stats = defaultdict(int)
    
    # Analyze patterns
    for result in results:
        for contrib in result['suggested_contributors']:
            contributor_frequency[contrib['slug']] += 1
        
        # Extract framework from file path
        framework = result['file'].split('/')[1] if len(result['file'].split('/')) > 1 else 'root'
        framework_stats[framework] += 1
    
    print("="*80)
    print("ATTRIBUTION ANALYSIS SUMMARY")
    print("="*80)
    print(f"Total files analyzed: {total_files}")
    print(f"Files without contributors: {total_files}")
    print()
    
    print("TOP CONTRIBUTORS BY FREQUENCY:")
    print("-" * 40)
    for contrib, count in contributor_frequency.most_common(10):
        print(f"{contrib}: {count} files")
    
    print("\nFRAMEWORK DISTRIBUTION:")
    print("-" * 40)
    for framework, count in sorted(framework_stats.items()):
        print(f"{framework}: {count} files")
    
    print("\n" + "="*80)
    print("SUGGESTED FRONTMATTER BY FRAMEWORK")
    print("="*80)
    
    # Group by framework
    by_framework = defaultdict(list)
    for result in results:
        framework = result['file'].split('/')[1] if len(result['file'].split('/')) > 1 else 'root'
        by_framework[framework].append(result)
    
    for framework, files in sorted(by_framework.items()):
        print(f"\n{framework.upper()} FRAMEWORK ({len(files)} files):")
        print("-" * 50)
        
        for file_result in files:
            relative_path = file_result['file']
            print(f"\nFile: {relative_path}")
            print("Contributors:")
            for contrib in file_result['suggested_contributors']:
                print(f"  - {contrib['name']} ({contrib['slug']}): {contrib['substantial_commits']} substantial commits")
            
            print("Suggested frontmatter:")
            print(file_result['suggested_frontmatter'])
            print()

def generate_implementation_guide(results):
    """Generate a practical implementation guide."""
    print("\n" + "="*80)
    print("IMPLEMENTATION GUIDE")
    print("="*80)
    
    print("\nTo add contributors to files systematically:")
    print("1. For each file listed below, add the suggested frontmatter to the top")
    print("2. Ensure the frontmatter is between --- markers")
    print("3. Place it after any existing frontmatter fields (like tags)")
    print("4. Test locally with './serve.sh' to verify formatting")
    print()
    
    print("BATCH PROCESSING COMMANDS:")
    print("-" * 40)
    print("You can use these commands to add contributors in batches:")
    print()
    
    # Group by similar contributor patterns
    patterns = defaultdict(list)
    for result in results:
        # Create a pattern key based on contributor slugs
        contributor_slugs = [c['slug'] for c in result['suggested_contributors']]
        pattern_key = tuple(sorted(contributor_slugs))
        patterns[pattern_key].append(result)
    
    for pattern, files in patterns.items():
        if len(files) > 1:  # Only show patterns with multiple files
            print(f"Pattern: {', '.join(pattern)} ({len(files)} files)")
            sample_frontmatter = files[0]['suggested_frontmatter']
            print(f"Files: {', '.join([f['file'] for f in files[:3]])}{'...' if len(files) > 3 else ''}")
            print(f"Frontmatter:\n{sample_frontmatter}")
            print()

def main():
    """Main function to generate the summary."""
    results = load_results()
    generate_summary(results)
    generate_implementation_guide(results)

if __name__ == "__main__":
    main()