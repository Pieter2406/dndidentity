import { BaseRepository } from './BaseRepository';
import { IRoomDBRepresentation } from './contracts/RoomContract';
import { RoomSchema } from './RoomSchema';
class RoomRepository extends BaseRepository<IRoomDBRepresentation> {
  constructor() {
    super('Room', RoomSchema);
  }
}
export const roomRepository = new RoomRepository();
