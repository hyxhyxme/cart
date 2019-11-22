<template>
  <div class="wrapper">
    <div>
      <h2>购物车</h2>
      <ul>
        <li v-for="item in carts" :key="item.id">
          {{item.name}} x {{item.price}} = {{item.quantity*item.price}}
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {

    };
  },
  computed:{
    carts(){
      return this.$store.state.carts.carts
    }
  }
};
</script>
<style lang="less" scoped>
</style>
