<template>
  <InternoComponent />
  <BlogComponent />
  <BlogdetailsComponent />
</template>

<script>
import InternoComponent from "./components/InternoComponent.vue";
import BlogComponent from "./components/BlogComponent.vue";
import BlogdetailsComponent from "./components/BlogdetailsComponent.vue";

export default {
  components: { InternoComponent, BlogComponent, BlogdetailsComponent },
};
</script>

<style lang="scss"></style>
