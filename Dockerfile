
#Stage 1
FROM node:24.14.1 AS builder

WORKDIR /app

COPY package-lock.json .
COPY package.json .

RUN npm install --omit=dev

#Stage 2
FROM node:24-slim 

WORKDIR /app

COPY --from=builder /app/node_modules /app/node_modules

COPY . /app

ENTRYPOINT ["node" , "index.js"]
