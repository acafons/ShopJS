FROM node:21-slim

WORKDIR /home/node/app

USER node

EXPOSE 3000

CMD [ "tail", "-f", "/dev/null" ]
