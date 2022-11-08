import express, { NextFunction, Request, Response } from 'express'
const finnhub = require('finnhub');
// import finnhub from 'finnhub'

const api_key = finnhub.ApiClient.instance.authentications['api_key'];
api_key.apiKey = "bv4mnbf48v6qpate9n30"
const finnhubClient = new finnhub.DefaultApi()

// {getData: ()=>{}}

const finController: any = {};

type SymbolResult = {
    description: string,
    displaySymbol: string,
    symbol: string,
    type: string
}

finController.getPrice = (req: Request, res: Response, next: NextFunction) => {
    console.log('body', req.body)
    const symbol = req.body.symbol || 'string'
    console.log(symbol)

    finnhubClient.quote(symbol, (error: any, data: any, response: any) => {
        console.log('data', data)
        if (data.d === null) {
            next({
                log: 'No results from entered Symbol',
                status: 204,
                message: { err: 'Invalid Symbol' },
            })
        } else {
            res.locals.price = data.c;
            res.locals.percent = data.dp;
        }
        next()
    });
}
finController.getSymbol = (req: Request, res: Response, next: NextFunction) => {

    const symbol = req.body.symbol || 'string'
    finnhubClient.symbolSearch(symbol, (error: any, data: any, response: any) => {
        // the function below sorts through the incoming data and returns the object which matches the ticker symbol
        res.locals.name = data.result.find((element: SymbolResult, index: number) => {
            return element.symbol === symbol;
        })
        return next()
    });

}

/*
c
Current price

d
Change

dp
Percent change

h
High price of the day

l
Low price of the day

o
Open price of the day

pc
Previous close price


*/


export default finController