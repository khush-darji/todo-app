FROM node:22

WORKDIR /usr/src/app

# # Install deps first
COPY package.json package-lock.json* ./
RUN npm ci

# # Copy config & source
COPY tsconfig.json tsconfig.node.json vite.config.ts ./
COPY index.html ./
COPY src ./src

EXPOSE 5173

# Vite dev server with HMR on all interfaces
CMD ["npm", "run", "dev", "--", "--host", "0.0.0.0", "--port", "5173"]
