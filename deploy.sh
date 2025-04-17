#!/bin/bash

# Print colorful messages
GREEN='\033[0;32m'
BLUE='\033[0;34m'
NC='\033[0m' # No Color

# Print start message
echo -e "${BLUE}Starting deployment process...${NC}"

# Navigate to client directory
cd client

# Install dependencies
echo -e "${BLUE}Installing dependencies...${NC}"
npm install

# Run deployment
echo -e "${BLUE}Deploying to GitHub Pages...${NC}"
npm run deploy

# Check if deployment was successful
if [ $? -eq 0 ]; then
    echo -e "${GREEN}Deployment successful!${NC}"
    echo -e "${GREEN}Your application is now live at: https://krone128.github.io/visioinsnap-webpage/${NC}"
else
    echo -e "\033[0;31mDeployment failed. Please check the error messages above.${NC}"
    exit 1
fi 