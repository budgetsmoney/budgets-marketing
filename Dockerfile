ARG NODE_VERSION=14.5.0

FROM node:${NODE_VERSION}-alpine

# Reference: https://dev.to/stoutlabs/my-docker-setup-for-gatsbyjs-and-nextjs-5gao
RUN \
  apk add --no-cache python make g++ && \
  apk add vips-dev fftw-dev --update-cache \
  --repository http://dl-3.alpinelinux.org/alpine/edge/community \
  --repository http://dl-3.alpinelinux.org/alpine/edge/main \
  && rm -fR /var/cache/apk/*

RUN npm install -g gatsby-cli

WORKDIR /app

COPY [ "./package*.json", "./yarn.lock", "./" ]

RUN yarn && yarn cache clean

COPY . .

CMD [ "yarn", "develop", "-H", "0.0.0.0" ]