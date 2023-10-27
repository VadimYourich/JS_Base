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
          name: "product1",
          price: 99.99,
          available: true,
        },
        {
          id: 2,
          name: "product2",
          price: 100,
          available: true,
        },
        {
          id: 3,
          name: "product3",
          price: 20,
          available: true,
        },
        {
          id: 4,
          name: "product4",
          price: 150.5,
          available: false,
        },
        {
          id: 5,
          name: "product5",
          price: 77,
          available: false,
        },
        {
          id: 6,
          name: "product6",
          price: 111,
          available: true,
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
.products {
  display: grid;
  grid-template-columns: repeat(3, auto);
  justify-content: center;
  gap: 10px;
}
</style>
