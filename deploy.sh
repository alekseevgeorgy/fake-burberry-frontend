#!/usr/bin/env bash
ALIAS='alekseev-burberry-fake-shop-for-study-dev.now.sh'
URL=$(now build --public --token "$NOW_TOKEN")
# await-url "$URL"
# now ls --token "$NOW_TOKEN"
now alias set "$URL" "$ALIAS" --token "$NOW_TOKEN"

# now build --public --token=$NOW_TOKEN
# now alias set $NOW_URL "alekseev-burberry-fake-shop-for-study-dev" --token=$NOW_TOKEN
