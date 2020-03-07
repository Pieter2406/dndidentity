import express from 'express';
import path from 'path';
import { userFacade } from './facades/UserFacade';
import cors from 'cors';

const app = express();
app.use(cors())

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
app.get('/api/users/:userId/characters',userFacade.getCharacters)

// Serve frontend
app.use('/', express.static(path.join(__dirname, '../public/dist')));
