#!/bin/bash

# Local spell checking script using CSpell
# Usage: ./scripts/spell-check.sh [options]

set -e

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
NC='\033[0m' # No Color

# Default options
CONFIG="./cspell.json"
FILES=""
FIX=false
VERBOSE=false

# Function to display help
show_help() {
    cat << EOF
Usage: $0 [OPTIONS] [FILES...]

Local spell checking script using CSpell

OPTIONS:
    -h, --help          Show this help message
    -c, --config FILE   Use specific config file (default: ./cspell.json)
    -f, --fix           Interactive mode to fix spelling issues
    -v, --verbose       Show verbose output
    --files PATTERN     Check specific file pattern (e.g., "src/**/*.md")

EXAMPLES:
    $0                              # Check all configured files
    $0 src/wallet-security/*.md     # Check specific files
    $0 --fix                        # Interactive fixing mode
    $0 --verbose --files "*.md"     # Verbose mode with specific pattern

EOF
}

# Parse command line arguments
while [[ $# -gt 0 ]]; do
    case $1 in
        -h|--help)
            show_help
            exit 0
            ;;
        -c|--config)
            CONFIG="$2"
            shift 2
            ;;
        -f|--fix)
            FIX=true
            shift
            ;;
        -v|--verbose)
            VERBOSE=true
            shift
            ;;
        --files)
            FILES="$2"
            shift 2
            ;;
        -*)
            echo "Unknown option $1"
            show_help
            exit 1
            ;;
        *)
            FILES="$FILES $1"
            shift
            ;;
    esac
done

# Check if cspell is available
if ! command -v npx &> /dev/null; then
    echo -e "${RED}Error: npx not found. Please install Node.js and npm.${NC}"
    exit 1
fi

if [ ! -f "package.json" ] || ! npm list cspell &> /dev/null; then
    echo -e "${RED}Error: cspell not installed. Run 'npm install' first.${NC}"
    exit 1
fi

# Check if config file exists
if [ ! -f "$CONFIG" ]; then
    echo -e "${RED}Error: Config file '$CONFIG' not found.${NC}"
    exit 1
fi

echo -e "${GREEN}🥢 Running spell check with CSpell...${NC}"
echo -e "Config: $CONFIG"

if [ "$VERBOSE" = true ]; then
    echo -e "Files: ${FILES:-"(using config defaults)"}"
fi

# Build cspell command
CSPELL_CMD="npx cspell --config=$CONFIG"

if [ "$VERBOSE" = true ]; then
    CSPELL_CMD="$CSPELL_CMD --show-context --show-suggestions"
fi

if [ "$FIX" = true ]; then
    echo -e "${YELLOW}Interactive fixing mode not yet implemented.${NC}"
    echo -e "For now, use: npx cspell --config=$CONFIG --show-suggestions [files]"
fi

# Run spell check
if [ -n "$FILES" ]; then
    if $CSPELL_CMD $FILES; then
        echo -e "${GREEN}✅ No spelling issues found!${NC}"
        exit 0
    else
        echo -e "${RED}❌ Spelling issues found. See output above.${NC}"
        echo -e "${YELLOW}💡 To add words to dictionary:${NC}"
        echo -e "   1. Add technical terms to appropriate dictionary in ./dictionaries/"
        echo -e "   2. Or add to ignoreWords in cspell.json for one-off exceptions"
        exit 1
    fi
else
    if $CSPELL_CMD; then
        echo -e "${GREEN}✅ No spelling issues found!${NC}"
        exit 0
    else
        echo -e "${RED}❌ Spelling issues found. See output above.${NC}"
        echo -e "${YELLOW}💡 To add words to dictionary:${NC}"
        echo -e "   1. Add technical terms to appropriate dictionary in ./dictionaries/"
        echo -e "   2. Or add to ignoreWords in cspell.json for one-off exceptions"
        exit 1
    fi
fi