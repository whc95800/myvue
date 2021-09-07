export default {
  namespaced:true,
  actions:{
    incrementOdd(context,value){
      if(context.state.sum%2)
        context.commit('increment',value)
    },
    incrementWait(context,value){
      setTimeout(()=>{
        context.commit('increment',value)
      },500)
    }},
  mutations:{
    increment(state,value){
      state.sum += value
    },
    decrement(state,value){
      state.sum -= value
    }
  },
  state:{
    sum:0,
    school:'尚硅谷',
    subject:'前端'},
  getters:{
    bigSum(state){
      return state.sum*10
    }
  }
}
