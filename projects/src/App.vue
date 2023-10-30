<template>
  <InternoComponent />
  <BlogComponent />
  <BlogdetailsComponent />
  <ProjectComponent />
</template>

<script>
import InternoComponent from "./components/InternoComponent.vue";
import BlogComponent from "./components/BlogComponent.vue";
import BlogdetailsComponent from "./components/BlogdetailsComponent.vue";
import ProjectComponent from "./components/ProjectComponent.vue";

export default {
  components: {
    InternoComponent,
    BlogComponent,
    BlogdetailsComponent,
    ProjectComponent,
  },
};
</script>

<style lang="scss"></style>
