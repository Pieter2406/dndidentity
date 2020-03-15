import Vue from 'vue';
import Vuex, { ActionTree, MutationTree, StoreOptions } from 'vuex';
import { authStore } from './AuthStore';
import { characterStore } from './CharacterStore';
import { IRootState } from './contract';
import { roomStore } from './RoomStore';

Vue.use(Vuex);

const rootState: IRootState = {
  socket: {
    isConnected: false,
    message: '',
    reconnectError: false,
  },
};

const mutations: MutationTree<IRootState> = {
  SOCKET_ONOPEN(state, event) {
    Vue.prototype.$socket = event.currentTarget;
    state.socket.isConnected = true;
  },
  SOCKET_ONCLOSE(state, event) {
    state.socket.isConnected = false;
  },
  SOCKET_ONERROR(state, event) {
    return;
  },
  // default handler called for all methods
  SOCKET_ONMESSAGE(state, message) {
    state.socket.message = message;
  },
  // mutations for reconnect methods
  SOCKET_RECONNECT(state, count) {
    return;
  },
  SOCKET_RECONNECT_ERROR(state) {
    state.socket.reconnectError = true;
  },
};
const actions: ActionTree<IRootState, IRootState> = {
  sendMessage: ({}, message) => {
    Vue.prototype.$socket.sendObj(message);
  },
};

const storeOptions: StoreOptions<IRootState> = {
  actions,
  modules: { authStore, characterStore, roomStore },
  mutations,
  state: rootState,
};

export default new Vuex.Store(storeOptions);
