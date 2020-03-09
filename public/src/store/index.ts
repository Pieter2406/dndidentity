import Vue from 'vue';
import { authStore } from './AuthStore';
import Vuex, { MutationTree, ActionTree, StoreOptions } from 'vuex';
import { characterStore } from './CharacterStore';
import { IRootState } from './contract';

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
    console.error(state, event);
  },
  // default handler called for all methods
  SOCKET_ONMESSAGE(state, message) {
    state.socket.message = message;
  },
  // mutations for reconnect methods
  SOCKET_RECONNECT(state, count) {
    console.info(state, count);
  },
  SOCKET_RECONNECT_ERROR(state) {
    state.socket.reconnectError = true;
  },
};
const actions: ActionTree<IRootState, IRootState> = {
  sendMessage: ({}, message) => {
    console.log(Vue.prototype.$socket);
    Vue.prototype.$socket.sendObj(message);
  },
};

const storeOptions: StoreOptions<IRootState> = {
  actions,
  modules: { authStore, characterStore },
  mutations,
  state: rootState,
};

export default new Vuex.Store(storeOptions);
