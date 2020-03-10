import express from 'express';
import path from 'path';
import * as WebSocket from 'ws';
import * as http from 'http';
import { userFacade } from './facades/UserFacade';
import cors from 'cors';
import bodyParser from 'body-parser';
import { initDB } from './repositories/dbInitializer';
import { roomFacade } from './facades/RoomFacade';

const jsonParser = bodyParser.json();

const app = express();
app.use(cors());
app.use(jsonParser);

const server = http.createServer(app);
const wss = new WebSocket.Server({ server });
const activeConnections: WebSocket[] = [];

app.get('/api/users/:userId/characters', userFacade.getCharacters);

wss.on('connection', (ws: WebSocket) => {
  console.log(`connection added: ${ws.url}`);
  activeConnections.push(ws);
  ws.send(JSON.stringify({ message: 'ping' }));
});

// Serve frontend
app.use('/', express.static(path.join(__dirname, '../public/dist')));

app.get('/helloworld', (req, res) => res.send('helloworld'));

app.post('/sendMessage', (req, res) => {
  activeConnections.forEach(ac => ac.send(JSON.stringify(req.body)));
  res.sendStatus(200);
});

app.post('/rooms/register', roomFacade.createRoom);

app.post('/rooms/:roomId/join', roomFacade.joinRoom);

initDB().then(() => {
  server.listen(
    process.env.PORT || process.env.OPENSHIFT_NODEJS_PORT || 2406,
    () => {
      console.log(
        `server started at port ${process.env.PORT ||
          process.env.OPENSHIFT_NODEJS_PORT ||
          2406}`,
      );
    },
  );
});
