# Manatee

# How to run the app

There are two ways of runngin the app

1. Download the image from, and run the container

2. Clone the repo from GitHub
    - run `npm i`
    - run `npm start`


Create a simple web based React application that takes a stock ticker symbol as input, and
displays the stock’s latest quote price. The app should query your own NodeJS server using
your own REST API. Within your NodeJS server, you will query a public stock API to retrieve the
stock quote data.
Recommendations:
● This should take around 2-4 hours to complete. Don’t feel like you have to spend more
time than that to make it fancy.
● Feel free to use ‘create-react-app’ to spin up your app.
● We recommend using the https://finnhub.io/docs/api#introduction REST API for
retrieving stock price data
○ This API requires an authentication token for an existing account. We have
created an account that you can use. Here is the token linked to said account
that you will need to use when performing REST requests:
bv4mnbf48v6qpate9n30

Requirements:

● Provide an input field that accepts a stock ticker symbol (e.g AAPL, TSLA, AMZN)
● Provide a button or alternative way to submit the input.
● When submitted, the web app will query your own NodeJS REST endpoint for the
provided stock’s price data.
● Your NodeJS endpoint should then query the finnhub (or similar) public API to
retrieve the stock’s latest quote.
● Within the web app, display the current price for the stock

Bonus:

● add tests for your code
● use TypeScript instead of JavaScript
● display the time for the current price
● display the percentage change of the current price from the previous closing
price
● Make it easy for someone (us!) to run your application

Please be ready to review your code with the team.
Questions? Reach out to us for any clarifications! Have fun!