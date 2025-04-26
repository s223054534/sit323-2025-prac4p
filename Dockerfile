# Use the official Node.js image
FROM node:18

# Set the working directory in the container
WORKDIR /usr/src/app

# Copy package.json and package-lock.json (if they exist) to install dependencies
COPY package*.json ./

# Install the app dependencies
RUN npm install

# Copy the rest of the application code to the container
COPY . .

# Expose the port the app runs on (assuming your app runs on 3000)
EXPOSE 3000

# Command to run the app
CMD ["npm", "start"]
