import axios from "axios";

const state = {
  user: null,
  jwtToken: localStorage.getItem("jwtToken"),
};

const getters = {
  isAuthenticated: (state) => state.jwtToken !== null,
  getUser: (state) => state.user,
};

const actions = {
  async authenticate({ commit }, identifiers) {
    const { data } = await axios.post(
      `${process.env.VUE_APP_API_URL}/auth/local`,
      {
        identifier: identifiers.email,
        password: identifiers.password,
      }
    );
    commit("setUser", data.user);
    commit("setJwtToken", data.jwt);
    localStorage.setItem("jwtToken", data.jwt);
  },
  async register({ commit }, identifiers) {
    const { data } = await axios.post(
      `${process.env.VUE_APP_API_URL}/auth/local/register`,
      identifiers
    );
    commit("setUser", data.user);
    commit("setJwtToken", data.jwt);
    localStorage.setItem("jwtToken", data.jwt);
  },
  async loadUserInformations({ commit, state }) {
    const {data} = await axios.get(`${process.env.VUE_APP_API_URL}/users/me`, {
      headers: {
        Authorization: `Bearer ${state.jwtToken}`
      }
    });
    console.log(data);
    commit('setUser', data);
  },
};

const mutations = {
  setUser: (state, user) => (state.user = user),
  setJwtToken: (state, jwtToken) => (state.jwtToken = jwtToken),
};

export default {
  state,
  getters,
  actions,
  mutations,
};
