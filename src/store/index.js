import Vue from 'vue'
import Vuex from 'vuex'
import employee from './employee'
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
      employee
    },
    // getters,

    // enable strict mode (adds overhead!)
    // for dev mode only
    strict: process.env.DEV
  })
}
