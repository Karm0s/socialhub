import axios from 'axios';

const state = {
  allPosts: []
};

const getters = {
  getPosts: (state) => state.allPosts
};

const actions = {
  async loadPosts({ commit, rootState }){
    const {data} = await axios.get(`${process.env.VUE_APP_API_URL}/posts`, {
      headers: {
        Authorization: `Bearer ${rootState.auth.jwtToken}`
      }
    });
    console.log(data);
    commit('updatePosts', data);
  },
  async createPost({ rootState}, content){
    await axios.post(`${process.env.VUE_APP_API_URL}/posts`, {
      username: rootState.auth.user.username,
      content: content
    }, 
    {
      headers:{
        authorization: `Bearer ${rootState.auth.jwtToken}`
      }
    });
  }
};

const mutations = {
  updatePosts: (state, data) => state.allPosts = data
};

export default {
  state,
  getters,
  actions,
  mutations,
};
