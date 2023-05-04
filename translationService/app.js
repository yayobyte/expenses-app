const express = require('express');
const bodyParser = require('body-parser');
const en = require('./en.json')
const ar = require('./ar.json')

const app = express();
app.use(bodyParser.json());

const port = process.env.PORT || 3000;

app.get('/', async (req, res) => {
    res.send('it works')
})

app.get('/strings', async (req, res) => {
    console.warn('new request')
    console.log({ req }) ;
    const strings = { en, ar }
    res.send(strings)
})

app.listen(port, () => {
	console.log(`Server running on port ${port}`);
});
