<template>
  <div>
    <h2>Название продукта: {{ product.name }}</h2>
    <h3>Цена: {{ formattedPrice }}</h3>
    <h3 v-if="product.aviable" style="color: green">Наличие: Available</h3>
    <h3 v-else style="color: red">Наличие: Out of stock</h3>
  </div>
</template>

<script>
export default {
  name: "ProductDetails",
  props: {
    product: Object,
  },
  computed: {
    formattedPrice() {
      return `${"$" + this.product.price}`;
    },
  },
};
</script>

<style lang="scss" scoped>
div {
  width: 400px;
  height: 200px;
  border: 1px solid #000;
  background-color: bisque;
  display: flex;
  flex-direction: column;
  gap: 10px;
}
</style>
