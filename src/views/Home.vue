<template>
    <div class="wrapper">
      <Products></Products>
      <Carts></Carts>
    </div>
</template>

<script>
import Products from '../components/Products'
import Carts from '../components/Carts'
export default {
  components : {
    Products,
    Carts
  },
  data() {
    return {
     
    };
  },
  mounted(){
  }
}
</script>
<style lang="less" scoped>

</style>