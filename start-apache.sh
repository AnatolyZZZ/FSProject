#!/bin/bash

# Create necessary Laravel directories and set permissions
mkdir -p /var/www/html/bootstrap/cache /var/www/html/storage /var/www/html/apache_log 
chown -R www-data:www-data /var/www/html/storage /var/www/html/bootstrap/cache /var/www/html/apache_log 
chmod -R 775 /var/www/html/storage /var/www/html/bootstrap/cache /var/www/html/apache_log 

# Start supervisord to manage apache2
exec supervisord -n -c /etc/supervisor/conf.d/supervisord.conf
