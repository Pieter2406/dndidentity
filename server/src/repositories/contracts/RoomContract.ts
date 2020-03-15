import { IBaseDBRepresentation } from './default';

export interface IRoomDBRepresentation extends IBaseDBRepresentation {
  playerIds: string[];
}
