# syntax=docker/dockerfile:1

# Comments are provided throughout this file to help you get started.
# If you need more help, visit the Dockerfile reference guide at
# https://docs.docker.com/go/dockerfile-reference/

# Want to help us make this template better? Share your feedback here: https://forms.gle/ybq9Krt8jtBL3iCk7

FROM node:23.10.0-alpine

WORKDIR /usr/src/app

# Copy package files
COPY package*.json ./

# Install dependencies including type declarations
RUN npm install

# Copy source code and env file
COPY . .

# Load environment variables
ENV NODE_ENV=development
ENV PORT=5000

# Expose port
EXPOSE 5000

# Start the application
CMD ["npm", "start"]
