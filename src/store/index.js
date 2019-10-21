import Vue from 'vue'
import Vuex from 'vuex'
import index from './employee'
// import * as getters from './employee/getters'
// import example from './employee'
Vue.use(Vuex)

/*
 * If not building with SSR mode, you can
 * directly export the Store instantiation
 */

export default function (/* { ssrContext } */) {
  return new Vuex.Store({
    modules: {
      // example
      index
    },
    // getters,

    // enable strict mode (adds overhead!)
    // for dev mode only
    strict: process.env.DEV
  })
}
