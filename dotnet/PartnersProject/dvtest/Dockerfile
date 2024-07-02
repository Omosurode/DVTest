FROM node:18-alpine

# set working directory
WORKDIR /usr/src/app

# add `/app/node_modules/.bin` to $PATH
ENV PATH /usr/src/app/node_modules/.bin:$PATH

# install app dependencies
COPY package.json /usr/src/app/package.json
COPY package-lock.json /usr/src/app/package-lock.json
RUN npm install --silent
RUN npm install react-scripts@5.0.1 -g --silent

EXPOSE 3000

# add app
COPY . ./

# start app
CMD ["npm", "start"]