import { Request, Response } from 'express-serve-static-core';
import { roomRepository } from '../repositories/RoomRepository';
class RoomFacade {
  public async createRoom(req: Request, res: Response): Promise<void> {
    if (!req.body.dmId) {
      res.sendStatus(400);
      return;
    }
    const newRoom = await roomRepository.saveItem({
      dmId: req.body.dmId,
      playerIds: ['test1', 'test2'],
      roomId: 'roomId',
    });
    res.send(newRoom);
  }
}

export const roomFacade = new RoomFacade();
