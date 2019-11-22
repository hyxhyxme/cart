import { ADDPRODUCTSTOCART, SETLIST, CHANGEINVENTORY } from './types' 
const state = {
    carts : []
}

const mutations = {
    [SETLIST](state, { rootState, id:pid}){//对象得解构赋值的重命名
        let products = rootState.products.products
       
        let { id, name, price} = products.find((value)=>{
            return value.id === pid
        })
        let item = state.carts.find((value)=>{
            return value.id === pid
        })
         //  这里更改查询到的某个值，就可以更改state中数组的值
         //注意find方法是不会更改原数组的值的，但是在这里对查询出来的值进行更改，是会更改state中原数据的值的
        if(item){
            item.quantity++
        }else{
            state.carts.push({
                id,
                name,
                price,
                quantity :1
            })
        }
    }
}

const actions = {
    [ADDPRODUCTSTOCART]({ commit, rootState, dispatch },id){
        commit(SETLIST,{ 
            rootState,
            id,
        }) 
        dispatch('products/'+CHANGEINVENTORY, id, {root : true})
    }
}

export default {
    namespaced : true,
    state,
    mutations,
    actions
}