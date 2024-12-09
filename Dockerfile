FROM node:14
COPY package*.json
RUN npm install
COPY ...
EXPOSE 30001
CMD["node","app.js"]
