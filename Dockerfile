FROM node:16.14.0-alpine as builder
WORKDIR /app
COPY . .

RUN yarn global add typescript
RUN yarn install && yarn build

FROM mcr.microsoft.com/playwright:focal as runner
WORKDIR /app

ENV NODE_ENV production

COPY --from=builder /app/dist /app/dist
COPY --from=builder /app/package.json .
COPY --from=builder /app/yarn.lock .

RUN yarn install --production

CMD node dist/main.js
