import express, { NextFunction } from 'express'
const finnhub = require('finnhub');
// import finnhub from 'finnhub'

const api_key = finnhub.ApiClient.instance.authentications['api_key'];
api_key.apiKey = "bv4mnbf48v6qpate9n30"
const finnhubClient = new finnhub.DefaultApi()

// {getData: ()=>{}}

const finControllor: any = {};

finControllor.getData = (req: Request, res: Response, next: NextFunction) => {
    // Stock candles
    finnhubClient.stockCandles("AAPL", "D", 1590988249, 1591852249, (error: any, data: any, response: any) => {
        console.log(data)
        return next()
    });

}


export default finControllor