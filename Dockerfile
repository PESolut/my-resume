FROM nginx:alpine
COPY ./react-fe/build /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]