import express, { NextFunction, Request, Response } from 'express'
const finnhub = require('finnhub');
// import finnhub from 'finnhub'

const api_key = finnhub.ApiClient.instance.authentications['api_key'];
api_key.apiKey = "bv4mnbf48v6qpate9n30"
const finnhubClient = new finnhub.DefaultApi()

// {getData: ()=>{}}

const finControllor: any = {};

type SymbolResult = {
    description: string,
    displaySymbol: string,
    symbol: string,
    type: string,
}

finControllor.getData = async (req: Request, res: Response, next: NextFunction) => {
    const symbol = req.body.symbol || 'string'
    // console.log(symbol)

    finnhubClient.quote(symbol, (error: any, data: any, response: any) => {
        if (data.d === null){
            next({
                log: 'No results from entered Symbol',
                status: 204,
                message: { err: 'Invalid Symbol' },
            })        
        } else {
            res.locals.price = data.c
        }
    });

    finnhubClient.symbolSearch(symbol, (error: any, data: any, response: any) => {
        // the function below sorts through the incoming data and returns the object which matches the ticker symbol
        res.locals.name = data.result.find((element: SymbolResult, index: number) => {
            return element.symbol === symbol;
        })
    });

    // console.log('a',a)

    // return next()
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


export default finControllor