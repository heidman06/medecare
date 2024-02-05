# Use the official Node.js image
FROM node:21-alpine

# Set the working directory
WORKDIR /app

# Copy package.json
COPY package.json ./

# Install dependencies
RUN npm install --no-audit --progress=false

# Copy the rest of the application
COPY .. .

# Build the Vite frontend
RUN npm run build

# Expose ports
EXPOSE 4173 8000 8080 5173 3306

# Start your servers
CMD ["npm", "run", "production"]
