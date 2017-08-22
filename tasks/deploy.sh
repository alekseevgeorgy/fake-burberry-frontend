#!/usr/bin/env bash
ALIAS='alekseev-burberry-fake-shop-for-study.now.sh'
URL=$(now build --public --token "$NOW_TOKEN")
now alias "$URL" "$ALIAS" --token "$NOW_TOKEN"
