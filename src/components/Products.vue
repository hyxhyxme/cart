<template>
<div>
   <h2>商品列表</h2>
    <ul>
      <li v-for="item in products" :key="item.id">
        {{item.name}} / {{item.price}} 
        <button :disabled="item.inventry === 0" @click="handleClick(item.id)">加入购物车</button>
      </li>
    </ul>
</div>
</template>

<script>
import { LOADDATA, ADDPRODUCTSTOCART } from '../store/types'
export default {
  data() {
    return {

    };
  },
  computed:{
      products(){
          return this.$store.state.products.products
      }
  },
  mounted(){
      this.$store.dispatch('products/' + LOADDATA)
  },
  methods : {
    handleClick(id){
      this.$store.dispatch('carts/' + ADDPRODUCTSTOCART,id)
    }
  }
};
</script>
<style lang="" scoped>

</style>