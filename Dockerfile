FROM node:12.14.0-alpine
WORKDIR /app
COPY package.json yarn.lock ./
RUN yarn
COPY src ./src
COPY static ./static
COPY server.js webpack.config.js .babelrc ./
RUN yarn compile
CMD [ "yarn", "serve" ]
