# Step 1: Use an official Node.js image
FROM node:16-slim

# Step 2: Set the working directory inside the container
WORKDIR /app

# Step 3: Copy the package.json and package-lock.json to install dependencies
COPY package*.json ./

# Step 4: Install dependencies
RUN npm install

# Step 5: Copy the rest of the backend files into the container
COPY . .

# Step 6: Expose the port your backend runs on (5000)
EXPOSE 5002

# Step 7: Set the command to run the backend server (e.g., nodemon for development)
CMD ["npm", "run", "dev"]
