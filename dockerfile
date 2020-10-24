FROM node:12.19.0

ENV DIR /np-starter
RUN rm -rf $DIR && mkdir -p $DIR

WORKDIR $DIR
COPY . ./

RUN npm install && npm run build