import { IApiCharacter } from '../../../shared/ApiContract';

class CharacterService{
    public async getCharacters(userId:String):Promise<IApiCharacter[]> {
        return Array(5).fill(1).map(_=> ({
            firstName: `${Math.random()}`,
            lastName: `${Math.random()}`
        }));
    }
}
export const characterService = new CharacterService