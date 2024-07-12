# Use an official Node.js runtime as a parent image
FROM node:16-alpine as build

# Set the working directory in the container
WORKDIR /app

# Copy package.json and package-lock.json to work directory
COPY package.json .

# RUN rm -rf node_modules package-lock.json
# Install dependencies
RUN npm install

# Copy the current directory contents into the container at /app
COPY . .

EXPOSE 5173

# Command to run the app
CMD ["npm", "run", "dev"]