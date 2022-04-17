FROM node:16

RUN mkdir /onuryildiz.dev

WORKDIR /onuryildiz.dev

COPY package.json /onuryildiz.dev/

RUN npm install

COPY . /onuryildiz.dev/

RUN npm run build

CMD ["npm","run","start"]