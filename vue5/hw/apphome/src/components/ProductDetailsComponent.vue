<template>
  <div>
    <h2>
      Название: <span style="color: rgb(14, 95, 76)">{{ product.name }}</span>
    </h2>
    <h3>
      Цена: <span style="color: rgb(14, 95, 76)">{{ formattedPrice }}</span>
    </h3>
    <h3 v-if="product.available" style="color: rgb(14, 95, 76)">Available</h3>
    <h3 v-else style="color: rgb(192, 50, 14)">Out of stock</h3>
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
  width: 300px;
  height: 200px;
  border: 1px solid #000;
  background-color: rgb(179, 223, 226);
  display: flex;
  flex-direction: column;
  gap: 10px;
}
</style>
