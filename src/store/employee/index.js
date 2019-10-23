import state from './state'
import getters from './getters'
import mutations from './mutations'
import * as actions from './actions'

export default {
  namespaced: true,
  state,
  getters: { ...getters },
  mutations: { ...mutations },
  actions
}
