export type Optional<T> = T | null;

import { ICharacter } from '@/contracts/Character';

export interface IRootState {
  socket: {
    isConnected: boolean;
    message: string;
    reconnectError: boolean;
  };
}
export interface IAuthState {
  userName: string;
  userState: any;
  isAuthenticated: boolean;
}

export interface ICharacterState {
  activeCharacter: Optional<ICharacter>;
  characters: ICharacter[];
}

export interface IRoomState {
  roomId: Optional<string>;
}
