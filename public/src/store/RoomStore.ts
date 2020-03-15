import axios from 'axios';
import { ActionTree, GetterTree, Module, MutationTree } from 'vuex';
import { IRoomState, IRootState } from './contract';

export enum roomActions {
  createRoom = 'createRoom',
}

enum roomMutations {
  SET_ROOM_ID = 'SET_ROOM_ID',
}

const roomState: IRoomState = {
  roomId: null,
};

const mutations: MutationTree<IRoomState> = {
  [roomMutations.SET_ROOM_ID](state, payload) {
    state.roomId = payload;
  },
};

const actions: ActionTree<IRoomState, IRootState> = {
  async [roomActions.createRoom]({ commit }) {
    const response = await axios.post('http://localhost:2406/api/rooms/');
    commit(roomMutations.SET_ROOM_ID, response.data);
  },
};

const getters: GetterTree<IRoomState, IRootState> = {};

const namespaced = false;

export const roomStore: Module<IRoomState, IRootState> = {
  actions,
  getters,
  mutations,
  namespaced,
  state: roomState,
};
