#!/bin/bash

# Start supervisord to manage apache2
exec supervisord -n -c /etc/supervisor/conf.d/supervisord.conf
