import { FETCH_DATA, FETCH_DEL_MU, FETCH_ADD_MU, FETCH_UPDATE_MU } from '../../../constants/Type'

const mutations = {
  [FETCH_DATA] (state, action) {
    state.data=action
  },
  [FETCH_DEL_MU] (state, action) {
    state.status=action
  },
  [FETCH_ADD_MU] (state, action) {
    state.status=action
  },
  [FETCH_UPDATE_MU] (state, action) {
    state.status=action
  },
}

export default mutations