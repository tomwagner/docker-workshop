FROM mhart/alpine-node:latest
MAINTAINER Tom Wagner <twagner@blueberry.io>

# create workdir
RUN mkdir -p /app

# set workdir
WORKDIR /app

# Copy the source code
ADD . .

# install dependencies
RUN yarn

# port for app
EXPOSE 8000

# Docker hardening,
# COPY ./docker/harden.sh /usr/local/bin/harden.sh
# RUN chmod 777 /usr/local/bin/harden.sh
# RUN /usr/local/bin/harden.sh
#USER user

ENTRYPOINT yarn start
