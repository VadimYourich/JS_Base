<template>
  <div>
    <img class="big" :src="bigImg" width="500" />
    <div>
      <img
        v-for="(cat, index) in cats"
        :key="index"
        :src="cat"
        @click="chengeImg(cat)"
        width="100"
      />
    </div>
  </div>
</template>

<script>
import img1 from "@/assets/img/OIP.jpg";
import img2 from "@/assets/img/OIP (1).jpg";
import img3 from "@/assets/img/OIP (2).jpg";
export default {
  data() {
    return {
      cats: {
        cat1: require("@/assets/img/krasivye-kartinki-kotov-1.jpg"),
        cat2: img1,
        cat3: img2,
        cat4: img3,
      },
      bigImg: "",
    };
  },
  methods: {
    chengeImg(catUrl) {
      this.bigImg = catUrl;
    },
  },
};
</script>

<style lang="scss" scoped></style>
