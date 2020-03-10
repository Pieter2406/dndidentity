import mongoose from 'mongoose';
export const RoomSchema = new mongoose.Schema({
  playerIds: [String],
  dmId: String,
});
