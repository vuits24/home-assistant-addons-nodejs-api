#!/usr/bin/with-contenv bashio
set +u

#export REFRESH_TOKEN=$(bashio::config 'config')
#bashio::log.info "Refresh token configured as ${REFRESH_TOKEN}."

bashio::log.info "Starting bridge service."
npm run start
