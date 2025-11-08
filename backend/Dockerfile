FROM node:20-alpine
WORKDIR /usr/src/app

COPY backend/package*.json ./
RUN npm ci  # <-- DIGANTI DARI npm install

COPY backend/ .

EXPOSE 5000
CMD [ "node", "server.js" ]