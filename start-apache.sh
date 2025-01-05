#!/bin/bash

# Configure Apache
# Enable the Apache modules
a2enmod proxy
a2enmod rewrite
a2enmod headers

for site in /etc/apache2/sites-available/*; do 
	ln -sf "$site" /etc/apache2/site-enabled

for conf in /etc/apache2/conf-availabe/*; do 
	ln -sf "$conf" /etc/apache2/conf-enabled


# Start supervisord to manage apache2
exec supervisord -n -c /etc/supervisor/conf.d/supervisord.conf

