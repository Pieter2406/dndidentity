import Vue from 'vue';
import { authStore } from './AuthStore';
import Vuex, { MutationTree, ActionTree, StoreOptions } from 'vuex';
import { IRootState } from './contract';

Vue.use(Vuex);

const mutations: MutationTree<IRootState> = {};
const actions: ActionTree<IRootState, IRootState> = {};

const storeOptions: StoreOptions<IRootState> = {
  actions,
  modules: { authStore },
  mutations,
};

export default new Vuex.Store(storeOptions);
