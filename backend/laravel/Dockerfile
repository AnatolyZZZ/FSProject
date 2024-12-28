FROM php:8.3-cli

# Install system dependencies and PHP extensions
RUN apt-get update && apt-get install -y \
    libpng-dev \
    libjpeg-dev \
    libfreetype6-dev \
    libzip-dev \
    unzip \
    git \
    curl && \  
    docker-php-ext-configure gd --with-freetype --with-jpeg && \
    docker-php-ext-install gd pdo pdo_mysql zip


# Install Composer
COPY --from=composer:2 /usr/bin/composer /usr/bin/composer

# Set the working directory
WORKDIR /var/www/html

# Set environment variable to allow running Composer as root
ENV COMPOSER_ALLOW_SUPERUSER=1

# Copy the entry script
COPY ./laravel-entrypoint.sh /usr/local/bin/laravel-entrypoint.sh

# Ensure the entry script is executable
RUN chmod +x /usr/local/bin/laravel-entrypoint.sh

# Set the entrypoint to the entry script
ENTRYPOINT ["laravel-entrypoint.sh"]
