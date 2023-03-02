FROM node:16.15

# Set work directory
WORKDIR /platon

# Copy dependecies
COPY package-lock.json /platon/package-lock.json
COPY package.json /platon/package.json

# Install dependecies
RUN npm ci

COPY apps /platon/apps
COPY libs /platon/libs
COPY jest.config.ts /platon/jest.config.ts
COPY jest.preset.js /platon/jest.preset.js
COPY nx.json /platon/nx.json
COPY tsconfig.base.json /platon/tsconfig.base.json
