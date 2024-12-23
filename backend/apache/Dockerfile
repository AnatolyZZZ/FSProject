FROM php:8.3-apache

# Install required dependencies
RUN apt-get update && apt-get install -y supervisor \
    libzip-dev \
    libonig-dev \
    libpng-dev \
    libjpeg-dev \
    libfreetype6-dev \
    mariadb-client \
    && docker-php-ext-configure gd --with-freetype --with-jpeg \
    && docker-php-ext-install gd pdo pdo_mysql zip \
    && rm -rf /var/lib/apt/lists/*

# Create necessary directories and log files
RUN mkdir /etc/apache2/logs/ && \
    chown -R www-data:www-data /etc/apache2/logs/ && \
    chmod -R 755 /etc/apache2/logs/ 

# Modify Apache's log settings to log to stdout and stderr
# RUN echo "ErrorLog /dev/stderr" >> /etc/apache2/apache2.conf && \
    # echo "CustomLog /dev/stdout combined" >> /etc/apache2/apache2.conf


# Copy supervisor config
COPY /backend/apache/supervisord.conf /etc/supervisor/conf.d/supervisord.conf

# Enable necessary Apache modules
RUN a2enmod rewrite
RUN a2enmod headers

# Expose port 80
EXPOSE 80

# CMD to run supervisord which manages apache2
CMD ["supervisord", "-n", "-c", "/etc/supervisor/conf.d/supervisord.conf"]
