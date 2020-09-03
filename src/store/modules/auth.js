import axios from "axios";

const store = {
  user: null,
  jwtToken: ""
};

const getters = {
  isAuthenticated: state => state.user !== null,
  getUser: state => state.user
};

const actions = {
  async authenticate({ commit }, identifiers) {
    const { data } = await axios.post(
      "http://localhost:1337/auth/local",
      {
        identifier: identifiers.email,
        password: identifiers.password
      }
    );
    commit("setUser", data.user);
    commit("setJwtToken", data.jwt);
    localStorage.setItem('jwtToken', data.jwt);
  },
  async register({ commit }, identifiers) {
    const { data } = await axios.post(
      "http://localhost:1337/auth/local/register",
      identifiers
    );
    commit("setUser", data.user);
    commit("setJwtToken", data.jwt);
    localStorage.setItem('jwtToken', data.jwt);
  }
};

const mutations = {
  setUser: (state, user) => (state.user = user),
  setJwtToken: (state, jwtToken) => (state.jwtToken = jwtToken)
};

export default {
  store,
  getters,
  actions,
  mutations
};
