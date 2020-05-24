import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
import qs from 'qs'
import { home } from './modules'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    name:"小花",
    age:18,
    count:0,
    islogin:'',
    // status:'',
  },
  mutations: {
    'FECH_NAME' (state, action) {
      console.log('index')
      state.data = action
    },
    'FECH_COUNT' (state,action) {
      state.count = action ? state.count + 1 :state.count - 1;  
    },
    'FETCH_LOGIN_MU' (state,action) {
      state.islogin=action
      localStorage.setItem('token',true)
    },

  },
  actions: {
    'FETCT_LOGIN' ( {commit}, val ) {
      axios.post('http://api.baxiaobu.com/index.php/home/v1/login',qs.stringify(val)).then(
        res => {
          commit('FETCH_LOGIN_MU',res.data.message);
        }
      )
    },
  },
  modules: {
    home
  }
})
