FROM node:18 as build

RUN mkdir /app
WORKDIR /app

COPY package.json /app/package.json
COPY package-lock.json /app/package-lock.json

RUN npm install
COPY . .
RUN npm run build

FROM nginx:alpine

#COPY nginx.conf /etc/nginx/nginx.conf
COPY --from=build /app/build /usr/share/nginx/html
# copy .env.example as .env to the relase build
#COPY --from=build /app/.envdocker /usr/share/nginx/html/.env

#RUN apk add --update nodejs && apk add --update npm && npm i -g runtime-env-cra@0.2.0

WORKDIR /usr/share/nginx/html

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]