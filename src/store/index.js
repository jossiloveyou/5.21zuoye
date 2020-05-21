import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
import qs from 'qs'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    name:"小花",
    age:18,
    count:0,
    data:[],
    islogin:'',
    status:'',
  },
  mutations: {
    'FECH_NAME' (state) {
      state.name = '小白'
    },
    'FECH_COUNT' (state,action) {
      state.count = action ? state.count + 1 :state.count - 1;  
    },
    'FETCH_DATA' (state,action) {
      state.data=action
    },
    'FETCH_LOGIN_MU' (state,action) {
      state.islogin=action
      localStorage.setItem('token',true)
    },
    'FETCH_DEL_MU' (state,action) {
      state.status=action
    },
    'FETCH_ADD_MU' (state,action) {
      state.status=action
    },
    'FETCH_UPDATE_MU' (state,action) {
      state.status=action
    },
    'FETCH_SEARCH_MU' (state,action) {
      state.data=action
    },

  },
  actions: {
    'FETCT_ACTIONS' ({commit}) {
      axios.get('https://api.baxiaobu.com/index.php/home/v5/getuser').then(
        res => {
          commit('FETCH_DATA',res.data.users);
        }
      )
    }, 
    'FETCT_LOGIN' ( {commit}, val ) {
      axios.post('http://api.baxiaobu.com/index.php/home/v1/login',qs.stringify(val)).then(
        res => {
          commit('FETCH_LOGIN_MU',res.data.message);
        }
      )
    },
    'FETCT_DEL' ( {commit}, val ) {
      let obj={}
      obj.id=val
      axios.post('https://api.baxiaobu.com/index.php/home/v5/deleteUser',qs.stringify(obj)).then(
        res => {
          commit('FETCH_DEL_MU',res.data.info);
        }
      )
    },
    'FETCT_ADD' ( {commit}, val ) {
      axios.post('https://api.baxiaobu.com/index.php/home/v5/add',qs.stringify(val)).then(
        res => {
          commit('FETCH_ADD_MU',res.data.info);
        }
      )
    },
    'FETCT_UPDATE' ( {commit}, val ) {
      axios.post('https://api.baxiaobu.com/index.php/home/v5/updateUser',qs.stringify(val)).then(
        res => {
          commit('FETCH_UPDATE_MU',res.data.info);
        }
      )
    },
    'FETCT_SEARCH' ( {commit}, val ) {
      console.log(val)
      let obj={}
      obj.keyword=val
      console.log(obj)
      axios.get('https://api.baxiaobu.com/index.php/home/v5/findUser',qs.stringify(obj)).then(
        res => {
          console.log(res)
          commit('FETCH_SEARCH_MU',res.data.users);
        }
      )
    },

  },
  modules: {

  }
})
