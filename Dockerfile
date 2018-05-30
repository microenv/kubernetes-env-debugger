FROM node:alpine
RUN mkdir /code
WORKDIR /code
COPY package.json ./
RUN npm install
COPY . .
RUN rm -f package-lock.json
EXPOSE 3000
CMD [ "npm", "start" ]
