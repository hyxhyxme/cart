import { LOADDATA, SETPRODUCTS,SETINVENTORY,CHANGEINVENTORY }from './types'
import Vue from 'vue'
import axios from 'axios'
import VueAxios from 'vue-axios'

Vue.use(VueAxios, axios)

const state = {
    products : []
}
const mutations = {
    [SETPRODUCTS](state,data){
        state.products = data
    },
    [SETINVENTORY](state,id){
        let product = state.products.find((value)=>{
            return value.id === id
        })
        product.inventry--
        
    }
}
const actions = {
    [LOADDATA]({commit}){
        axios({
            url : "https://api.myjson.com/bins/183bry",
        }).then(function(data){
            commit(SETPRODUCTS,data.data)
        })
    },
    [CHANGEINVENTORY]({commit,rootGetters},id){
        commit(SETINVENTORY,id)
    }
    
}
export default {
    namespaced : true,
    state,
    mutations,
    actions
}