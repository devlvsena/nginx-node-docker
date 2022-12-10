FROM node:18-alpine

WORKDIR /home/node/app

COPY ./src/package.json .

RUN npm i -g nodemon

RUN npm install

CMD [ "npm", "run", "start" ]
EXPOSE 3030