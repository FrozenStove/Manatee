import express, { NextFunction, Request, Response } from 'express'
const finnhub = require('finnhub');

// initialize the finnhub API
const api_key = finnhub.ApiClient.instance.authentications['api_key'];
api_key.apiKey = "bv4mnbf48v6qpate9n30"
const finnhubClient = new finnhub.DefaultApi()

// setup typing for the middleware controller
type FinController = {
    getPrice: (req: Request, res: Response, next: NextFunction) => void
    getSymbol: (req: Request, res: Response, next: NextFunction) => void
}

const finController: FinController = {} as FinController;

// setup typing to iterate through the data provided in the finnhub API
type SymbolResult = {
    description: string,
    displaySymbol: string,
    symbol: string,
    type: string
}

finController.getPrice = async (req: Request, res: Response, next: NextFunction) => {
    // console log incoming data
    console.log('body', req.body)
    const symbol = req.body.symbol || 'Default Symbol'
    // console.log( finnhubClient.quote.toString())
    const a = finnhubClient.quote(symbol, (error: any, data: any, response: any) => {
        console.log('data', data)
        if (data.d === null) {
            next({
                log: 'No results from entered Symbol',
                status: 204,
                message: { err: 'Invalid Symbol' },
            })
            promiseResolve();
        } else {
            res.locals.price = data.c;
            res.locals.percent = data.dp;
            promiseResolve();
            return next()
        }
    })

    // The promises below are to facilitate testing
    var promiseResolve: any, promiseReject;
    var promise = new Promise(function (resolve, reject) {
        promiseResolve = resolve;
        promiseReject = reject;
    });
    return promise

}

finController.getSymbol = (req: Request, res: Response, next: NextFunction) => {
    const symbol = req.body.symbol || 'Default Symbol'

    // invoke the finnhub API to get the full name of a symbol
    finnhubClient.symbolSearch(symbol, (error: any, data: any, response: any) => {
        // the function below sorts through the incoming data and returns the object which matches the ticker symbol
        const results = data.result.find((element: SymbolResult, index: number) => {
            return element.symbol === symbol;
        })
        if (results) {
            res.locals.name = results.description
        } else {
            res.locals.name = 'No Results'
        }
        promiseResolve()
        return next()
    });

    // The promises below are to facilitate testing   
    var promiseResolve: any, promiseReject;
    var promise = new Promise(function (resolve, reject) {
        promiseResolve = resolve;
        promiseReject = reject;
    });
    return promise
}

export default finController