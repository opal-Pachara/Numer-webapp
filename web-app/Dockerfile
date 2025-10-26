FROM node:22.14.0

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

EXPOSE 5174

CMD ["npm","run","dev"]
