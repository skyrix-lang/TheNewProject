FROM node:14.1.0
RUN mkdir -p /node
ADD . /node
WORKDIR /node
#RUN npm install
#CMD [ "node", "server.js" ]