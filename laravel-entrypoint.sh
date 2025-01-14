#!/bin/bash
chown -R www-data:www-data /var/www/html
chmod -R 775 /var/www/html

# Perform Composer install
composer install --optimize-autoloader

curl -o wait-for-it.sh https://raw.githubusercontent.com/vishnubob/wait-for-it/master/wait-for-it.sh
chmod +x wait-for-it.sh

# Wait for MySQL to be ready using wait-for-it script
./wait-for-it.sh mysql:3306 --timeout=30 --strict -- echo "MySQL is ready"

# Run database migrations and seeding
php artisan migrate 
php artisan db:seed 

# Keep the container running
tail -f /dev/null
