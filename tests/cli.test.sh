#!/usr/bin/env bash

alias tcsm='$(pwd)/dist/cli.js'

tcsm message "OHAI"
tcsm compilationStarted "i18n"
tcsm blockOpened "locales" --description "Preparing locale files"
tcsm message "$(cat ./.eslintrc.json)" --status=WARNING
tcsm blockClosed "locales"
tcsm compilationFinished "i18n"
