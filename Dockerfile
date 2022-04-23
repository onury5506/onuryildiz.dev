FROM node:16-alpine

RUN mkdir /onuryildiz.dev

WORKDIR /onuryildiz.dev

COPY package.json /onuryildiz.dev/

RUN npm install --legacy-peer-deps

COPY . /onuryildiz.dev/

RUN npm run build

CMD ["npm","run","start"]