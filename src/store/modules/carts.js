
const state = {
  items: []
}

const getters = {
  cartProducts: (state, getters, rootState) => {
    return state.items.map(({ id, num }) => {
      const product = rootState.Products.Products.find(product => product.id === id)
      return {
        title: product.title,
        price: product.price,
        num
      }
    })
  },
  totalPrice: (state, getters) => {
    return getters.cartProducts.reduce((total, product) => {
      return total + product.price * product.num
    }, 0)
  }
}

const mutations = {
  addproducttobag (state, { id }) {
    state.items.push({
      id,
      num: 1
    })
  },
  increaseitem (state, { id }) {
    const carItem = state.items.find(item => item.id === id)
    carItem.num++
  },
  clear (state) {
    state.items = []
  }
}

const actions = {
  addtobag ({ commit, state }, product) {
    if (product.inventory > 0) { // 库存不为空
      const carItem = state.items.find(item => item.id === product.id)
      if (!carItem) {
        commit('addproducttobag', { id: product.id })
      } else {
        commit('increaseitem', { id: product.id })
      }
    }
    commit('decreaseproductnum', { id: product.id })
  },
  checkoutall ({ commit, state }) {
    commit('clear')
  }
}

export default {
  state,
  getters,
  mutations,
  actions
}
