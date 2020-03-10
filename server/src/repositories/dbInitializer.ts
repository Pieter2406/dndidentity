import mongoose from 'mongoose';
import { roomRepository } from './RoomRepository';
export function initDB() {
  return new Promise((resolve, reject) => {
    mongoose.connect(process.env.MONGO_DB_CONNECTION_STRING, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    const db = mongoose.connection;

    db.on('error', err => {
      console.error.bind(console, 'MongoDB connection err');
      reject(err);
    });
    db.once('open', () => {
      console.log('db connected succesfully');
      resolve('DB connected');
      roomRepository.initializeSchema();
    });
  });
}
