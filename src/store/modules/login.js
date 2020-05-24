// import axios from "axios"

export default {
  namespaced:true,
  state: {
    name:"666",
    sex:"男",
    data:[],
  },
  mutations: {
    'FECH_NAME' ( state ) {
      console.log('login')
      state.name = '888'
    },
    'FECH_DATA_STATE' ( state, action ) {
      state.name = action
    }
  },
  actions: {
    'FECH_DATA' ({commit,rootState}) {
      console.log(rootState)
      // axios.get('https://api.baxiaobu.com/index.php/home/v5/getuser').then(
      //   res => {
          commit('FECH_DATA_STATE','xxx',{root:true});
        // }
      // )
    },
    // async 'FECH_DATA' ({commit}) {
    //   const res= await axios.get('https://api.baxiaobu.com/index.php/home/v5/getuser')
    //   commit('FECH_DATA',res.data.users);
    // }

  },
}
