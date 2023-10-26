<template>
  <div id="app">
    <h1>Товары магазина</h1>
    <ProductsComponent />
  </div>
</template>

<script>
import ProductsComponent from "./components/ProductsComponent.vue";

export default {
  name: "App",
  components: {
    ProductsComponent,
  },
};
</script>

<style lang="scss" scoped>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
