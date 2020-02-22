import express from 'express';
import path from 'path';

const app = express();

app.listen(
  process.env.PORT || process.env.OPENSHIFT_NODEJS_PORT || 2406,
  () => {
    console.log(
      `server started at port ${process.env.PORT ||
        process.env.OPENSHIFT_NODEJS_PORT ||
        2406}`
    );
  }
);

// Serve frontend
app.use('/', express.static(path.join(__dirname, '../public/dist')));
