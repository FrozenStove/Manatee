import fetch from 'node-fetch'
import express, { NextFunction, Request, Response ,Errback} from 'express'
import finController from './controllers/finnhub';

// port can be specified in the command line
const PORT = process.env.port || 3000;
// fetch()

const app = express();

// convert incoming stream data into usable objects
app.use(express.json())


app.use('/api/v1',
finController.getData,
(req, res) => {
    return res.sendStatus(418)
})

app.use(express.static('build'))


// Provide local and global error handlers
app.use((req: Request, res: Response) => res.status(404));

app.use((err: Errback, req: Request, res: Response, next: NextFunction) => {
    const defaultErr = {
        log: 'Express error handler caught unknown middleware error',
        status: 500,
        message: { err: 'An error occurred' },
    };
    const errorObj = Object.assign({}, defaultErr, err);
    console.log(errorObj.log);
    return res.status(errorObj.status).json(errorObj.message);
});


app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}...`);
  });