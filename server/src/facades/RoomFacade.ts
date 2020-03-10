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
    });
    res.send(newRoom);
  }

  public async joinRoom(req: Request, res: Response): Promise<void> {
    if (!req.body.playerId || !req.params.roomId) {
      res.sendStatus(400);
      return;
    }
    try {
      const room = await roomRepository.findItemById(req.params.roomId);
      if (!room.playerIds.includes(req.body.playerId)) {
        room.playerIds.push(req.body.playerId);
      }
      await roomRepository.saveItem(room);
      res.send(room);
    } catch (err) {
      res.send(err);
    }
  }
}

export const roomFacade = new RoomFacade();
