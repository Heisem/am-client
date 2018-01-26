FROM ubuntu:16.04

# replace shell with bash so we can source files
RUN rm /bin/sh && ln -s /bin/bash /bin/sh

ARG ports_expose
ARG supervisor

# update the repository sources list
# and install dependencies
RUN apt-get update -y \
    && apt-get install -y git curl wget nano nginx supervisor build-essential \
    && mkdir -p /var/logs/supervisor \
    && mkdir -p /logs \
    && mkdir -p /home/client

# nvm environment variables
ENV NVM_DIR /usr/local/nvm
ENV NODE_VERSION 9.4.0

# install nvm
RUN curl -o- https://raw.githubusercontent.com/creationix/nvm/v0.33.8/install.sh | bash \
    && source $NVM_DIR/nvm.sh \
    && nvm install $NODE_VERSION \
    && nvm alias default $NODE_VERSION \
    && nvm use default

## Supervisor
ADD $supervisor /etc/supervisor/conf.d/supervisor.conf

## nginx
RUN useradd --no-create-home nginx
ADD nginx.conf /etc/nginx/nginx.conf

# add node and npm to path so the commands are available
ENV NODE_PATH $NVM_DIR/v$NODE_VERSION/lib/node_modules
ENV PATH $NVM_DIR/versions/node/v$NODE_VERSION/bin:$PATH

ADD ./ /home/client

WORKDIR /home/client

RUN npm install

EXPOSE $ports_expose

CMD ["/usr/bin/supervisord"]