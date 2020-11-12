FROM node:10.14

RUN mkdir /app
WORKDIR /app

COPY package.json /app
COPY package-lock.json /app


RUN npm install -g nodemon
RUN npm install

# Copy source code
COPY . /app

# Launch application
CMD nodemon index.js