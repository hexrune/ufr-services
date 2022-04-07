FROM node:16.14.2-alpine as builder
WORKDIR /app
COPY . .

RUN yarn global add typescript
RUN yarn install && yarn build

FROM node:16.14.2-alpine as runner
WORKDIR /app

ENV NODE_ENV production
ENV PLAYWRIGHT_SKIP_BROWSER_DOWNLOAD 1
ENV PLAYWRIGHT_BROWSERS_PATH /app/node_modules

COPY --from=builder /app/dist /app/dist
COPY --from=builder /app/package.json .
COPY --from=builder /app/yarn.lock .

RUN yarn install --production

CMD node dist/main.js
