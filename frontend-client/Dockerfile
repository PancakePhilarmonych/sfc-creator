FROM node:16-alpine

WORKDIR /app

COPY ./frontend-client/package*.json ./

RUN npm install

EXPOSE 8080

COPY ./frontend-client .
COPY ./shared ./shared

CMD ["npm", "run", "dev"]