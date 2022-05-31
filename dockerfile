FROM node:16 AS ui-build
WORKDIR /usr/src
COPY . ./app/
RUN cd app && npm install && npm run build

# FROM node:16
# WORKDIR /usr/src/app/
# COPY --from=ui-build /usr/src/app/app/build ./app/build
# RUN ls

FROM nginx:alpine
# Set working directory to nginx asset directory
WORKDIR /usr/share/nginx/html
# Remove default nginx static assets
RUN rm -rf ./*
# Copy static assets from builder stage
COPY --from=ui-build /usr/src/app/build/ .
# Containers run nginx with global directives and daemon off
ENTRYPOINT ["nginx", "-g", "daemon off;"]