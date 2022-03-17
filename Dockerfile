FROM node:16.14.0-alpine as builder
WORKDIR /app
COPY . .
RUN yarn && yarn build

FROM node:16.14.0-alpine as runner
WORKDIR /app
COPY --from=builder /app/dist .
COPY --from=builder /app/node_modules ./node_modules
CMD node main.js
