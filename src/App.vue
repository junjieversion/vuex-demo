<template>
  <div id="app">
    <Title></Title>
    <ProductList></ProductList>
    <ShoppingCart></ShoppingCart>
  </div>
</template>

<script>
import Title from './components/title.vue'
import ProductList from './components/ProductList.vue'
import ShoppingCart from './components/ShoppingCart.vue'

export default {
  name: 'App',
  components: {
    Title,
    ProductList,
    ShoppingCart
  }
}
</script>

<style>

</style>
