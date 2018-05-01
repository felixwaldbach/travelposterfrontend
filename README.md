# TravelPoster Frontend

This repository holds all frontend code of the TravelPoster project.

## Dockerization
If you would like to "dockerize" this project you can use `docker build -t
YOUR_NAME` to do so.
A new image based on the official node image will be used to build the project.
The build files are then copied to a fresh ngnix image to enable fast serving.

After a successful build you can start a new container using the following
command:
`docker run -p EXTERNAL_PORT:80 -d YOUR_NAME`

