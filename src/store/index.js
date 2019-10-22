import Vue from 'vue'
import Vuex from 'vuex'
import Products from './modules/Products.js'
import carts from './modules/carts.js'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    Products,
    carts
  },
  strict: process.env.NODE_ENV !== 'production'
})
