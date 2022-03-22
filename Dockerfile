FROM node:16.14.0-alpine as builder
WORKDIR /app
COPY . .

RUN yarn global add typescript
RUN yarn install && yarn build

FROM node:16.14.0-alpine as runner
WORKDIR /app

COPY --from=builder /app/dist .
COPY --from=builder /app/node_modules ./node_modules

RUN npx playwright install
RUN export NODE_ENV=production

CMD node main.js
