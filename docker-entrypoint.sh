#!/bin/bash

# Perform Composer install
composer install --optimize-autoloader

curl -o wait-for-it.sh https://raw.githubusercontent.com/vishnubob/wait-for-it/master/wait-for-it.sh
chmod +x wait-for-it.sh

# Set correct permissions for storage and cache directories
mkdir -p /var/www/html/bootstrap/cache /var/www/html/storage
chown -R www-data:www-data /var/www/html/storage /var/www/html/bootstrap/cache
chmod -R 775 /var/www/html/storage /var/www/html/bootstrap/cache


# Wait for MySQL to be ready using wait-for-it script
./wait-for-it.sh mysql:3306 --timeout=30 --strict -- echo "MySQL is ready"

# Run database migrations and seeding
php artisan db:seed --force
php artisan install:api
php artisan migrate --force
php artisan config:publish cors

# Keep the container running
tail -f /dev/null
