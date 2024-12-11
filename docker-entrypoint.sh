#!/bin/bash

# Perform Composer install
composer install --optimize-autoloader

# Set correct permissions for storage and cache directories
chown -R www-data:www-data storage bootstrap/cache
chmod -R 775 storage bootstrap/cache


# Wait for MySQL to be ready using wait-for-it script
./wait-for-it.sh mysql:3306 --timeout=30 --strict -- echo "MySQL is ready"


if [ -z "$(ls -A /var/www/html/storage)" ]; then
    echo "Storage directory is empty. Copying files from host storage..."
    # Copy files from the temporary mount point to the actual storage volume
    cp -R /var/www/html/storage_host/* /var/www/html/storage/
else
    echo "Storage directory is not empty. Skipping copy."
fi

if [ -z "$(ls -A /var/www/html/bootstrap)" ]; then
    echo "Bootstrap directory is empty. Copying files from host storage..."
    # Copy files from the temporary mount point to the actual storage volume
    cp -R /var/www/html/bootstrap_host/* /var/www/html/bootstrap/
else
    echo "Storage directory is not empty. Skipping copy."
fi

# Run database migrations and seeding
php artisan migrate --force
php artisan db:seed --force

# Keep the container running
tail -f /dev/null
