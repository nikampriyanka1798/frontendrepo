FROM 200.0.1.100:5000/ubuntu-apache
COPY dist/Test/ /var/www/html
EXPOSE 80
CMD apachectl -D FOREGROUND
