import mongoose from 'mongoose';
export const RoomSchema = new mongoose.Schema({
  roomId: String,
  playerIds: [String],
  dmId: String,
});
