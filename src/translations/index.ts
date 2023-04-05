import express from 'express';
import translations from './translation';

const app = express();
app.use(express.json());

const PROT = 3000;

app.get('/', (req, res) => {
  res.json('');
});

app.post('/translate', (req, res) => {
  try {
    const  translate  = req.body;
    const result = translations[translate];
      res.send(result);
 
  } catch (error) {
    console.log(error);
  }
});


app.listen(PROT, () => {
  console.log('server listening on port ' + PROT);
});
