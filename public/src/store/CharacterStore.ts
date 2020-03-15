import axios from 'axios';
import { ActionTree, GetterTree, Module, MutationTree } from 'vuex';

import { ICharacterState, IRootState } from './contract';

const characterState: ICharacterState = {
  activeCharacter: null,
  characters: [],
};

const mutations: MutationTree<ICharacterState> = {
  charactersFetched(state, payload) {
    state.characters = payload;
  },
};

const actions: ActionTree<ICharacterState, IRootState> = {
  async fetchCharacters({ commit }) {
    const response = await axios.get(
      'http://localhost:2406/api/users/kristof/characters',
    );
    commit('charactersFetched', response && response.data);
  },
};

const getters: GetterTree<ICharacterState, IRootState> = {};

const namespaced = true;

export const characterStore: Module<ICharacterState, IRootState> = {
  actions,
  getters,
  mutations,
  namespaced,
  state: characterState,
};
