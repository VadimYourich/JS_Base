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
import HeaderComponent from "../components/HeaderComponent.vue";
import FooterComponent from "../components/FooterComponent.vue";
import SliderComponent from "../components/SliderComponent.vue";
import { mapGetters } from "vuex";
import { useHead } from "@vueuse/head";

export default {
  name: "ProjectDetails",
  components: { HeaderComponent, FooterComponent, SliderComponent },
  setup() {
    useHead({
      title: "ProjectDetails",
      meta: [
        {
          name: "ProjectDetails",
          content: "Детализация проектов",
        },
      ],
    });
  },
  computed: {
    ...mapGetters(["getSliderPictures", "getProjectDetails"]),
  },
};
</script>

<!-- <style lang="scss" scoped>
</style> -->
