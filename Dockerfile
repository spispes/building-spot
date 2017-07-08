# This image will be based on the oficial nodejs docker image
FROM node:boron

RUN mkdir -p /usr/src/building-spot
WORKDIR /usr/src/building-spot

COPY package.json /usr/src/building-spot
RUN npm install
#RUN npm install -g @angular/cli
COPY . /usr/src/building-spot

EXPOSE 4300

CMD ["npm", "start"]

