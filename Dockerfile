FROM node:alpine AS build

WORKDIR /usr/app
COPY . /usr/app

RUN npm install --only-production
RUN npm run-script build

FROM nginx
COPY --from=build /usr/app/build /usr/share/nginx/html

