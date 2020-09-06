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
  authenticate({ commit }, identifiers) {
    return new Promise((resolve, reject) => {
      axios
        .post(`${process.env.VUE_APP_API_URL}/auth/local`, {
          identifier: identifiers.email,
          password: identifiers.password,
        })
        .then(({data}) => {
          commit("setUser", data.user);
          commit("setJwtToken", data.jwt);
          localStorage.setItem("jwtToken", data.jwt);
          resolve();
        })
        .catch(() => {
          reject();
        });
    });
  },
  async register({ commit }, identifiers) {
    return new Promise((resolve, reject) => {
      axios
        .post(`${process.env.VUE_APP_API_URL}/auth/local/register`, identifiers)
        .then(({data}) => {
          commit("setUser", data.user);
          commit("setJwtToken", data.jwt);
          localStorage.setItem("jwtToken", data.jwt);
          resolve();
        })
        .catch(() => {
          reject();
        });
    });
  },
  async signOff({ commit }) {
    localStorage.removeItem("jwtToken");
    commit("setJwtToken", null);
  },
  async loadUserInformations({ commit, state }) {
    const { data } = await axios.get(
      `${process.env.VUE_APP_API_URL}/users/me`,
      {
        headers: {
          Authorization: `Bearer ${state.jwtToken}`,
        },
      }
    );
    commit("setUser", data);
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
