import Keycloak, { KeycloakInitOptions, KeycloakInstance } from 'keycloak-js';
import { ActionTree, GetterTree, Module, MutationTree } from 'vuex';
import keycloakConfig from '../assets/configs/keycloak.json';
import { IAuthState, IRootState } from './contract';

const authState: IAuthState = {
  isAuthenticated: false,
  userName: '',
  userState: null,
};

const mutations: MutationTree<IAuthState> = {
  authenticated(
    state,
    payload: { isAuthenticated: boolean; keycloakState: KeycloakInstance },
  ) {
    state.userState = payload.keycloakState;
    state.isAuthenticated = payload.isAuthenticated;
  },
};
const actions: ActionTree<IAuthState, IRootState> = {
  async authenticate({ commit }) {
    const keycloak = Keycloak(keycloakConfig);
    keycloak
      .init({
        onLoad: (keycloakConfig as KeycloakInitOptions).onLoad,
      })
      .success(auth => {
        commit('authenticated', {
          isAuthenticated: auth,
          keycloakState: keycloak,
        });
      });
  },
};
const getters: GetterTree<IAuthState, IRootState> = {
  isAuthenticated: (state: IAuthState) => {
    return !!state.userState;
  },
};

const namespaced = true;

export const authStore: Module<IAuthState, IRootState> = {
  actions,
  getters,
  mutations,
  namespaced,
  state: authState,
};
