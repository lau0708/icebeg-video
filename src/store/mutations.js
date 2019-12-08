export default {
  RefreshToken(state,data){
    state.token = data
  },
  RefreshLoading(state,data){
    state.Loading = data
  }
}
