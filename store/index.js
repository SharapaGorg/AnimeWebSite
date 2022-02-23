export const state = () => ({
  navigatorActivated: false,
  navigatorStatus: 'default' // default / onlyClose
})

export const mutations = {
  changeNavigatorState(state) {
    state.navigatorActivated = !state.navigatorActivated;
  },
  changeNavigatorStatus(state, status) {
    state.navigatorStatus = status
  }
}
export const actions = {}
export const getters = {}
