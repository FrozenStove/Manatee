import fetch from 'node-fetch'
import express from 'express'

// port can be specified in the command line
const PORT = process.env.port || 3000;
const apiKey = 'bv4mnbf48v6qpate9n30';
// fetch()

const app = express();


// app.use('api')

app.use(express.static('build'))

app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}...`);
  });