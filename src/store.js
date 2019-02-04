import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    launches: "DATA NOT FETCHED",
    rockets: "DATA NOT FETCHED",
    darkMode: true,
    loggedIn: false,
  },
  mutations: {
    setDarkmode(state) {
      if (state.darkMode == true) {
        state.darkMode = false
      } else(state.darkMode = true)
    },
    setLaunches(state, payload) {
      state.launches = payload;
    },
    setRockets(state, payload) {
      state.rockets = payload;
    }
  },
  actions: {
    changeDarkmode({
      state,
      commit
    }, plan) {
      commit('setDarkmode')
    },

    async getLaunches({
      state,
      commit
    }, plan) {

      try {
        let response = await axios.get(`https://api.spacexdata.com/v3/launches`, {});
        commit('setLaunches', response.data);
      } catch (error) {
        commit('setLaunches', []);
      }
    },

    async getRockets({
      state,
      commit
    }, plan) {
      try {
        let response = await axios.get(`https://api.spacexdata.com/v3/rockets`, {});
        commit('setRockets', response.data);
      } catch (error) {
        commit('setRockets', []);
      }
    }
  }
})