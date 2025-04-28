# Use the official Node.js image as a base image
FROM node:20.18.2-alpine3.20

# Set the working directory inside the container
WORKDIR /usr/src/app

# Copy package.json and package-lock.json to the working directory
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application code to the working directory
COPY . .

# Expose the port the app runs on
EXPOSE 3000

# Set environment variables for MongoDB (optional, for testing)
# This can also be passed at runtime using `--env` or an `.env` file
ENV MONGODB_URI=mongodb://root:example@mongodb-service:27017

# Command to run the application
CMD ["node", "index.js"]
