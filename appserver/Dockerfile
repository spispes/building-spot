# This image will be based on the oficial nodejs docker image
FROM node:boron
RUN apt-get update
RUN mkdir -p /usr/src/building-spot
WORKDIR /usr/src/building-spot

#COPY ./package.json /usr/src/building-spot
#RUN npm install
#COPY ./usr/src/building-spot

EXPOSE 4300

CMD ["npm", "start"]

