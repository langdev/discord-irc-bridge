FROM node:alpine
LABEL maintainer="Eunchong Yu <kroisse@gmail.com>"

WORKDIR /usr/app
COPY discord-irc .
RUN npm install && npm run build
COPY run.js .

CMD ["node", "--harmony", "./run.js"]
