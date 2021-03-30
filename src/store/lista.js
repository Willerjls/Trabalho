const state = {
  lista: []
}

const mutations = {
  adicionarItem (state, item) {
    state.lista.push(
      item
    )
  }
}

const actions = {
  adicionarItem ({ commit }, item) {
    commit('adicionarItem', item)
  }
}

const getters = {
  lista: state => {
    return state.lista
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions,
  getters
}
