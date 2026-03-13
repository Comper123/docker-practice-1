FROM node:20-alpine

WORKDIR /app

COPY package*.json ./
RUN npm install

COPY . .

RUN npm run build

# EXPOSE 5000

CMD npx drizzle-kit generate && npx drizzle-kit push && npm start