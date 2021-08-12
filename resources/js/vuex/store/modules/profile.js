import axios from 'axios'
const profile = {
  state: () => ({
    myProfile: {}
  }),
  mutations: {
    GET_PROFILE(state, myProfile) {
      state.myProfile = myProfile
    }
  },

  getters: {

  },
  actions: {
    GET_PROFILE({ commit }, userID) {
      return new Promise((resolve, reject) => {
        axios.get(`http://localhost:8084/api/profile/show`)
          .then(response => {
            commit('GET_PROFILE', response.data)
            resolve(response.data)
          })
          .catch(error => reject(error))
      })
    }
  }
}
export default profile