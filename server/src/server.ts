import express from 'express';

const app = express();

app.get('/', (req, res) => {
  res.send('hello dndidentity guys');
});

app.listen(
  process.env.PORT || process.env.OPENSHIFT_NODEJS_PORT || 2406,
  () => {
    console.log(
      `server started at Port:${process.env.PORT ||
        process.env.OPENSHIFT_NODEJS_PORT ||
        2406}`
    );
  }
);
