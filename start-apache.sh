#!/bin/bash

# Configure Apache
# Enable the Apache modules
ln -s /etc/apache2/mods-available/rewrite.load /etc/apache2/mods-enabled/
ln -s /etc/apache2/mods-available/headers.load /etc/apache2/mods-enabled/

# Enable sites by creating symlinks in sites-enabled
for site in /etc/apache2/sites-available/*.conf; do 
  ln -sf "$site" /etc/apache2/sites-enabled/
done

# Enable configurations by creating symlinks in conf-enabled
for conf in /etc/apache2/conf-available/*.conf; do 
  ln -sf "$conf" /etc/apache2/conf-enabled/
done

# Start supervisord to manage apache2
exec supervisord -n -c /etc/supervisor/conf.d/supervisord.conf
