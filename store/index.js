export const state = () => ({
  navigatorActivated: false,
  navigatorStatus: 'default', // default / onlyClose
  searchInput : ''
})

export const mutations = {
  changeNavigatorState(state) {
    state.navigatorActivated = !state.navigatorActivated;
  },
  changeNavigatorStatus(state, status) {
    state.navigatorStatus = status
  },
  setSearchInput(state, value) {
    state.searchInput = value
  }
}
export const actions = {}
export const getters = {}
