#!/usr/bin/env bash

npm install -g now

now build --public --token=$NOW_TOKEN
now alias --token=$NOW_TOKEN
