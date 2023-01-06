FROM node:alpine

WORKDIR /app

COPY package.json /app/

RUN npm install

COPY ./ ./

EXPOSE 3000

CMD ["npm", "start"]

# Use the command below to build for multiple platforms

# docker buildx build \
#    --platform linux/amd64,linux/arm64,linux/arm/v7 \
#    -t frozenstove/manatee:latest \
#    --push \
#    .