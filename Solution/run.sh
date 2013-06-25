#!/bin/sh

cd ./deploy

if [ "$1" = "-setup" ]; then
    npm install
fi

node development