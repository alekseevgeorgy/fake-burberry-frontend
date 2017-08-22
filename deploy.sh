#!/usr/bin/env bash
ALIAS='alekseev-burberry-fake-shop-for-study-dev.now.sh'
URL=$(now build --public --token "$NOW_TOKEN")
now alias set "$URL" "$ALIAS" --token "$NOW_TOKEN"
