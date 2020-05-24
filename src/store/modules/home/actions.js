import { listuser, adduser, deleteuser, updateuser } from '../../../services/home'
import { FETCT_ACTIONS, FETCT_DEL, FETCT_ADD, FETCT_UPDATE } from '../../../constants/Type'

const actions = {
 [FETCT_ACTIONS] ({commit}) {
    listuser().then(
      res => {
        commit('FETCH_DATA', res.data.data);
      }
      
    )
    
  },
 [FETCT_DEL] ({commit},action) {
    let obj={}
    obj.id=action
    deleteuser(obj).then(
      res => {
        commit('FETCH_DEL_MU', res.data.info);
      }
    )
  },
 [FETCT_ADD] ({commit},action) {
    adduser(action).then(
      res => {
        commit('FETCH_ADD_MU', res.data.info);
      }
    )
  },
 [FETCT_UPDATE] ({commit},action) {
    updateuser(action).then(
      res => {
        commit('FETCH_UPDATE_MU', res.data.info);
      }
    )
  },
}

export default actions