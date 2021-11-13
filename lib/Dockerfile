# syntax=docker/dockerfile:1
FROM adblockradio/adblockradio-docker-primary:0.0.2

RUN git clone https://github.com/adblockradio/adblockradio && cd adblockradio && npm install

# TODO: make this actually work
# TODO: add server to call this - base off of https://github.com/adblockradio/buffer

RUN apt-get update && apt-get install -y vim

ENTRYPOINT ["/bin/bash"]