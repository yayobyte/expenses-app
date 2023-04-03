const express = require('express');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.json());

const port = process.env.PORT || 3000;

const translations = {
	en: {
		hello: 'Hello',
		goodbye: 'Goodbye',
	},
	ar: {
		hello: 'مرحبا',
		goodbye: 'وداعا',
	},
};

app.get('/', async (req, res) => {
    res.send('it works')
})

app.post('/translate', async (req, res) => {
	try {
        const { text, to } = req.body;
	    const result = translations[to][text];
        res.send(result);
    } catch (e) {
        res.send(e)
    }
});

app.listen(port, () => {
	console.log(`Server running on port ${port}`);
});
