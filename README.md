# Manatee

This is a simple web app written in TypeScript as an excercise.

# How to run the app

There are two ways of running the app:

1. Download the image from [dockerhub](https://hub.docker.com/repository/docker/frozenstove/manatee), and run the container

2. Clone the repo from GitHub
    - run `npm i`


    For Production:
    - run `npm run build`
    - run `npm run start`


    For Development:
    - run `npm run dev`


# Prompt

Create a simple web based React application that takes a stock ticker symbol as input, and
displays the stock’s latest quote price. The app should query your own NodeJS server using
your own REST API. Within your NodeJS server, you will query a public stock API to retrieve the
stock quote data.