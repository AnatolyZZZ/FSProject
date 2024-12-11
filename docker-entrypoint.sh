#!/bin/bash
# Wait for MySQL to be ready
# Perform Composer install
composer install --optimize-autoloader

# Set correct permissions for storage and cache directories
chown -R www-data:www-data storage bootstrap/cache
chmod -R 775 storage bootstrap/cache

# Run database migrations and seeding
php artisan migrate --force
php artisan db:seed --force

# Keep the container running
tail -f /dev/null
