import { Request, Response } from 'express-serve-static-core';
import { characterService } from '../services/CharacterService'

class UserFacade {
    public async getCharacters(req: Request, res:Response):Promise<void>{
        if(!req.params.userId){
            res.sendStatus(400);
            return;
        }
        try{
            const characters = await characterService.getCharacters(req.params.userId);
            res.send(characters);
        }catch(err){
            console.log(err);
            res.send(err);
        }

    }
}

export const userFacade = new UserFacade();