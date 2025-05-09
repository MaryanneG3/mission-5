# Development mode for Vite
FROM node:20-slim

# Set the working directory inside the container
WORKDIR /app

# Copy package.json and package-lock.json for dependency installation
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the frontend files into the container
COPY . ./

# Expose the port Vite uses (default 5173)
EXPOSE 5173

# Start the Vite development server, ensure it listens on all interfaces
CMD ["npm", "run", "dev", "--", "--host"]
