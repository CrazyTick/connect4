# connect4

##connect four game

runing guide:

go to the directory of my submission folder connect-four, for example cd ~/connect-four

create image using my Dockerfile:
docker build -t connect-four:1.0 .

check docker images
docker images

create and run container with deamon, and map port of container to current machine’s port
docker run -d -p 4000:3000 connect-four:1.0

then, go to browser type in
localhost:4000

check docker containers
docker ps -a

to stop the running contianer:
docker container stop [contianer Id]:
