FROM php:8.3-apache

# Install required dependencies
RUN apt-get update && apt-get install -y supervisor \
    libzip-dev \
    libonig-dev \
    libpng-dev \
    libjpeg-dev \
    libfreetype6-dev \
    mariadb-client \
    unzip \
    git \
    curl \
    && docker-php-ext-configure gd --with-freetype --with-jpeg \
    && docker-php-ext-install gd pdo pdo_mysql zip \
    && rm -rf /var/lib/apt/lists/*

# Create necessary directories and log files
RUN mkdir /etc/apache2/logs/ && \
    chown -R www-data:www-data /etc/apache2/logs/ && \
    chmod -R 755 /etc/apache2/logs/ 

# Copy supervisor config
COPY /backend/apache/supervisord.conf /etc/supervisor/conf.d/supervisord.conf

# Enable necessary Apache modules
RUN a2enmod proxy rewrite headers

# Expose port 80
EXPOSE 80

# Copy the startup script
COPY ./start-apache.sh /usr/local/bin/start-apache.sh

# Make the script executable
RUN chmod +x /usr/local/bin/start-apache.sh

# CMD to run the startup script
CMD ["start-apache.sh"]

