import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    launches: "DATA NOT FETCHED",
    rockets: "DATA NOT FETCHED",
    darkMode: false,
    loggedIn: false,
    userInfo: "DATA NOT FETCHED"
  },
  mutations: {
    setUserInfo(state, payload) {
      state.userInfo = payload;
      console.log(payload)
    },

    setLogin(state) {
      state.loggedIn = true
    },
    setLogout(state) {
      state.loggedIn = false
    },
    setDarkmode(state) {
      if (state.darkMode == true) {
        state.darkMode = false
        console.log("lightson")
        console.log(state.darkMode)
      } else{state.darkMode = true
        console.log("lightsoff")}
        console.log(state.darkMode)},
    
    setLaunches(state, payload) {
      state.launches = payload;
    },
    setRockets(state, payload) {
      state.rockets = payload;
    }
  },
  actions: {
      setUserInfo({
        commit
      }, payload) {
        commit('setUserInfo', payload)
      },


      logout({
        commit
      }, plan) {
        commit('setLogout')
      },

      login({
        commit
      }, plan) {
        commit('setLogin')
      },

      changeDarkmode({
        commit
      }, plan) {
        commit('setDarkmode')
      },

      async getLaunches({
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