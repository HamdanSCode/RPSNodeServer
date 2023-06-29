import express, { Request, Response } from 'express';

const port = 3000;
const app = express()

app.get('/', (req: Request, res: Response) => {
  res.send('Express.js is installed correctly!');
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
