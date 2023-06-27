import express, { response } from 'express';
const app = express();
const port = 3000;
import fs from 'fs/promises';

app.get('/', (req, res) => {
    res.json({ message: 'Hello World!' });
});

app.post('/', (req, res) => {
    console.log(req.body.test)
    res.json({ message: "sup" })
});

app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});