FROM node:14-alpine
RUN apk add --update nodejs
COPY . /var/www
WORKDIR /var/www
RUN npm i
RUN npm i react-scripts@3.4.1 -g
ENTRYPOINT npm start
EXPOSE 80