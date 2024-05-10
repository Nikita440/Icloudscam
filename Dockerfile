FROM node:16-alpine as build

# Set working directory
WORKDIR /app

# Copy package.json and install dependencies
COPY package*.json ./
RUN npm install

# Copy source code
COPY . .


# Build the Next.js app

RUN npm run build

# Stage for production environment
FROM node:16-alpine as production

# Set working directory
WORKDIR /app

# Copy build output from build stage
COPY --from=build /app/ .next 
COPY --from=build /app/public ./public
COPY --from=build /app/node_modules ./node_modules
COPY --from=build /app/package*.json ./

# Expose port 3000
EXPOSE 3000

# Run the app
CMD ["npm", "start"]
