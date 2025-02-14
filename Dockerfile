FROM node:22-alpine AS build
ARG VITE_BASE_PATH

WORKDIR /app

COPY package.json package-lock.json ./

RUN npm i

COPY . ./

ENV VITE_BASE_PATH=${VITE_BASE_PATH}
RUN npm run build

FROM nginx:1.27-alpine

COPY ./nginx.conf /etc/nginx/conf.d/default.conf
COPY --from=build /app/dist /var/www/html/

EXPOSE 3000

ENTRYPOINT ["nginx","-g","daemon off;"]