# Use an official Node.js runtime as the base image
FROM node:20-alpine

# Set the working directory inside the container
WORKDIR /var/www/html/src

RUN apk add --no-cache curl

# Expose the port your app runs on 
EXPOSE 4000

# Start the app in development mode
CMD ["sh", "-c", "npm install && npm start"]

