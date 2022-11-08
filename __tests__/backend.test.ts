import express, { NextFunction, Request, Response, Errback } from 'express'
import finController from '../server/controllers/finnhub';

describe('Test Finnhub Middleware', () => {

    let res: Response = {} as Response;
    let req: Request = {} as Request;
    const next: NextFunction = jest.fn();

    beforeEach(() => {
        res = {} as Response;
        req = {} as Request;
        res.locals = {
            price: undefined,
            name: undefined
        }
    })
    
    test('getPrice should return a price', async () => {
        req.body = {
            symbol: 'AAPL'
        }
        
        await finController.getPrice(req, res, next)
        expect(next).toHaveBeenCalled()
        expect(res.locals).toBeDefined()
    })
    
    test('getPrice should return undefined for invalid symbols', async () => {
        req.body = {
            symbol: '1'
        }

        await finController.getPrice(req, res, next)
        expect(next).toHaveBeenCalled()
        expect(res.locals.price).toBe(undefined)
    })



    test('getSymbol should return a description', async () => {
        req.body = {
            symbol: 'AAPL'
        }

        await finController.getSymbol(req, res, next)

        expect(next).toHaveBeenCalled();
        expect(res.locals.name).toBe('APPLE INC');
    })

    test('getSymbol should return No Results for invalid symbols', async () => {
        req.body = {
            symbol: 'Invalid'
        }

        await finController.getSymbol(req, res, next)

        expect(next).toHaveBeenCalled();
        expect(res.locals.name).toBe('No Results');
    })

})
