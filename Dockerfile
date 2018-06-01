FROM node:alpine
COPY . /app
WORKDIR /app
# RUN npm install
EXPOSE 80
CMD [ "npm", "start" ]
