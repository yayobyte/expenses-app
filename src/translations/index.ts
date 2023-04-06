import express from 'express';
import translation from './translation';

const app = express();
app.use(express.json());

const PORT = 3000;

app.get('/', (req, res) => {
  res.json('');
});

app.post('/translate', (req, res) => {
  try {
    const translate = req.body;
    const result = translation[translate];
    res.send(result);
  } catch (error) {
    console.log(error);
  }
});

app.listen(PORT, () => {
  console.log('server listening on port ' + PORT);
});
