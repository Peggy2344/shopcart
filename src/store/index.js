import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    items: []
  },
  mutations: {
    additems (state, product) {
      let indexinstate = -1
      state.items.forEach((item, index) => {
        const id = item.id
        if (id === product.id) {
          indexinstate = index
        }
      })
      if (indexinstate === -1) {
        state.items.push(product)
      } else {
        state.items[indexinstate].count++
      }
    },
    delCount (state, data) {
      const itemIndex = state.items.indexOf(data)
      const item = state.items[itemIndex]
      item.count < 0
        ? state.items.splice(itemIndex, 1)
        : item.count--
    },
    addCount (state, data) {
      const itemIndex = state.items.indexOf(data)
      state.items[itemIndex].count++
    },
    removeItem (state, data) {
      const itemIndex = state.items.indexOf(data)
      state.items.splice(itemIndex, 1)
    }
  },
  actions: {
  },
  modules: {
  }
})
