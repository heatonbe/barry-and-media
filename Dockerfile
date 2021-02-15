FROM node:15.5 as build
WORKDIR /usr/src/app 
COPY package.json yarn.lock ./
RUN yarn
COPY . ./
RUN yarn build
EXPOSE 3000
CMD ["yarn", "start"]

# FROM nginx:latest
# COPY --from=build /usr/src/app/build /usr/share/nginx/
# EXPOSE 80
# CMD ["nginx", "-g", "daemon off;"]
