FROM nginx:stable-alpine

RUN mkdir -p /usr/share/nginx/html/brochure-catalog

ADD build/ /usr/share/nginx/html/brochure-catalog
COPY .devops/resources/nginx.conf /etc/nginx/nginx.conf
COPY .devops/resources/default.conf /etc/nginx/conf.d/default.conf
