<template>
  <InternoComponent />
  <BlogComponent />
  <BlogdetailsComponent />
  <ProjectComponent />
  <ProjectDetailsComponent />
</template>

<script>
import InternoComponent from "./components/InternoComponent.vue";
import BlogComponent from "./components/BlogComponent.vue";
import BlogdetailsComponent from "./components/BlogdetailsComponent.vue";
import ProjectComponent from "./components/ProjectComponent.vue";
import ProjectDetailsComponent from "./components/ProjectDetailsComponent.vue";

export default {
  components: {
    InternoComponent,
    BlogComponent,
    BlogdetailsComponent,
    ProjectComponent,
    ProjectDetailsComponent,
  },
};
</script>

<style lang="scss"></style>
