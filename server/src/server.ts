import express from 'express';

const app = express();

app.get('/', (req, res) => {
  res.send('hello dndidentiy guys');
});

app.listen(process.env.PORT || 2406, () => {
  console.log(`server started at port: ${process.env.PORT || 2406}`);
});
