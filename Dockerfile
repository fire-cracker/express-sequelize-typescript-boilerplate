# Use the node official image as a parent image.
FROM node:current-slim

LABEL Peace Oyedeji <oyedejipeacea@gmail.com>

# Create work directory
WORKDIR /

# Copy the file from your host to your current location.
COPY package.json .

# Install app dependencies
RUN yarn install

# Copy app source to work directory
COPY . .

# Add metadata to the image to describe which port the container is listening on at runtime.
EXPOSE 8080

# Build and run the app
CMD yarn start