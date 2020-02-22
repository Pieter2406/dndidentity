import express from 'express';

const app = express();

app.get('/', (req, res) => {
  res.send('hello dndidentiy guys');
});

app.listen(
  process.env.PORT || process.env.OPENSHIFT_NODEJS_PORT || 2406,
  () => {
    console.log(
      `server started at ${process.env.IP ||
        process.env.OPENSHIFT_NODEJS_IP ||
        'localhost'}:${process.env.PORT ||
        process.env.OPENSHIFT_NODEJS_PORT ||
        2406}`
    );
  }
);
