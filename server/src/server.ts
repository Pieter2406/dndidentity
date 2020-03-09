import express from 'express';
import path from 'path';
import * as WebSocket from 'ws';
import * as http from 'http';
import { userFacade } from './facades/UserFacade';
import cors from 'cors';
import bodyParser from 'body-parser';

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

// setInterval(() => {
//   activeConnections.forEach(
//     ws => ws.send(JSON.stringify({ message: 'ping' })),
//     2000,
//   );
// });

// Serve frontend
app.use('/', express.static(path.join(__dirname, '../public/dist')));

app.get('/helloworld', (req, res) => res.send('helloworld'));

app.post('/sendMessage', (req, res) => {
  console.log(activeConnections.join(', '));
  console.log(req.body);
  activeConnections.forEach(ac => ac.send(JSON.stringify(req.body)));
  res.sendStatus(200);
});

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
