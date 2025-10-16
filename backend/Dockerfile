FROM node:22-alpine

WORKDIR /usr/src/app

# Install deps first (better layer caching)
COPY package.json package-lock.json* ./
RUN npm install

# Copy TS config and sources
COPY tsconfig.json ./
COPY src ./src

EXPOSE 3000

# Dev hot-reload
CMD ["npm", "run", "dev"]