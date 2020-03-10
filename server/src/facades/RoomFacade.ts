import { Request, Response } from 'express-serve-static-core';
import { roomRepository } from '../repositories/RoomRepository';
class RoomFacade {
  public async createRoom(req: Request, res: Response): Promise<void> {
    console.log(req.body);
    if (!req.body.dmId) {
      res.sendStatus(400);
      return;
    }
    roomRepository.saveItem({
      dmId: req.body.dmId,
      playerIds: ['test1', 'test2'],
      roomId: 'roomId',
    });
    res.send();
  }
}

export const roomFacade = new RoomFacade();
