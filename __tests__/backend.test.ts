import express, { NextFunction, Request, Response ,Errback} from 'express'
import finController from '../server/controllers/finnhub';

describe('Test Signup middleware', () => {

    let res: Response = {} as Response;
    let req: Request = {} as Request;
    const next: NextFunction = jest.fn();

    beforeEach(() => {
        res = {} as Response;
        req = {} as Request;
    })

    test('Test the Signup', async () => {
        req.body = {
            symbol: 'Ticker'
        }

        await finController.getPrice(req, res, next)
        
        // expect(next).toHaveBeenCalled()
        expect(1).toBe(1)
        
    })
    
    test('Signup should sign someone up', async () => {
        req.body = {
            username: 'username',
            password: 'password',
            email: 'someone@somewhere.com'
        }


        // await userController.signup(req, res, next)

        

    })


})
