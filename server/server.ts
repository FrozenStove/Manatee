import fetch from 'node-fetch'
import express from 'express'
import finController from './controllers/finnhub';

// port can be specified in the command line
const PORT = process.env.port || 3000;
// fetch()

const app = express();

app.use('/api/v1',
finController.getData,
(req, res) => {
    return res.sendStatus(418)
})

app.use(express.static('build'))

app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}...`);
  });