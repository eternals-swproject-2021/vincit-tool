# specify a suitable source image
FROM node:12

WORKDIR /app

COPY package*.json ./

RUN npm ci

# copy the application source code files
COPY . .

EXPOSE 3000

# specify the command which runs the application
CMD ["npm", "start"]
