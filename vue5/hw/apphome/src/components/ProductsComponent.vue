<template>
  <div class="products">
    <ProductDetailsComponent
      v-for="product in products"
      :key="product.id"
      :product="product"
    />
  </div>
</template>

<script>
import ProductDetailsComponent from "./ProductDetailsComponent.vue";

export default {
  name: "Products",
  components: { ProductDetailsComponent },
  data() {
    return {
      products: [
        {
          id: 1,
          name: "iPhone 14",
          price: 850,
          aviable: true,
        },
        {
          id: 2,
          name: "iPod 4",
          price: 210,
          aviable: false,
        },
        {
          id: 3,
          name: "iPad 12",
          price: 620,
          aviable: true,
        },
        {
          id: 4,
          name: "iPhone 8",
          price: 240,
          aviable: false,
        },
        {
          id: 5,
          name: "iPhone 13",
          price: 699,
          aviable: true,
        },
        {
          id: 6,
          name: "iPod 3",
          price: 99.99,
          aviable: true,
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
.products {
  // display: flex;
  // flex-direction: row;
  // flex-wrap: wrap;
  // gap: 10px;

  display: grid;
  grid-template-columns: repeat(3, 400px);
  justify-content: center;
  gap: 10px;
}
</style>
