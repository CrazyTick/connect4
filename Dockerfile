FROM ubuntu:latest
RUN apt-get update
RUN apt-get install -y npm curl
RUN curl -sL https://deb.nodesource.com/setup_9.x | bash -
RUN apt-get install -y nodejs
RUN node -v
RUN npm -v
COPY . connect-four/
RUN cd connect-four && npm install
WORKDIR connect-four/
CMD ["npm", "start"]
