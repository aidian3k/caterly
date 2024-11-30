FROM nginx:1.25.3-alpine3.18

COPY ./nginx.conf /etc/nginx/nginx.conf
COPY ./routes.conf.template /etc/nginx/templates/routes.conf.template

ENV DOLLAR='$'

EXPOSE 80
