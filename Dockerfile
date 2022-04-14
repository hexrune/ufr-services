FROM node:16.14.2-alpine as builder
WORKDIR /app
COPY . .

RUN yarn global add typescript
RUN yarn install && yarn build

FROM ubuntu:20.04
WORKDIR /usr/src/app

ENV NODE_ENV production

RUN apt-get update -y && \
    apt-get install -y curl && \
    # Add nodejs to repo
    curl -sL https://deb.nodesource.com/setup_16.x | bash - && \
    # Add yarn to repo
    curl -sS https://dl.yarnpkg.com/debian/pubkey.gpg | apt-key add - && \
    echo "deb https://dl.yarnpkg.com/debian/ stable main" | tee /etc/apt/sources.list.d/yarn.list && \
    # Cleanup packages and update the repos
    apt-get remove -y --purge cmdtest && \
    apt-get update && \
    # Install the packages
    apt-get install -y nodejs && \
    apt-get install -y --no-install-recommends yarn && \
    # Smoke tests
    node --version && \
    npm --version && \
    yarn --version && \
    # remove useless files from the current layer \
    rm -rf /var/lib/apt/lists/* && \
    rm -rf /var/lib/apt/lists.d/* && \
    apt-get autoremove && \
    apt-get clean && \
    apt-get autoclean && \
    rm -rf /etc/apt/sources.list.d

COPY --from=builder /app/dist /app/dist
COPY --from=builder /app/package.json .
COPY --from=builder /app/yarn.lock .

RUN yarn install --production && npx playwright install --with-deps chromium

CMD node dist/main.js
