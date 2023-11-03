<template>
  <HeaderComponent />

  <section class="projectdetails-banner center"></section>

  <section class="projectdetails center">
    <div class="projectdetails__content">
      <h1 class="projectdetails__heading">{{ getProjectDetails.heading }}</h1>
      <p class="projectdetails__text">{{ getProjectDetails.paragraf_1 }}</p>
      <br />
      <p class="projectdetails__text">{{ getProjectDetails.paragraf_2 }}</p>
    </div>
    <SliderComponent :slider-pictures="getSliderPictures" />
  </section>

  <FooterComponent />
</template>

<script>
import HeaderComponent from "./HeaderComponent.vue";
import FooterComponent from "./FooterComponent.vue";
import { mapGetters } from "vuex";
import SliderComponent from "./SliderComponent.vue";

export default {
  name: "ProjectDetails",
  components: { HeaderComponent, FooterComponent, SliderComponent },
  computed: {
    ...mapGetters(["getSliderPictures", "getProjectDetails"]),
  },
};
</script>

<!-- <style lang="scss" scoped>
</style> -->
