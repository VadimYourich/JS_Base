import { createRouter, createWebHistory } from "vue-router";
import InternoComponent from "../pages/InternoComponent.vue";
import BlogComponent from "../pages/BlogComponent.vue";
import BlogDetailsComponent from "../pages/BlogDetailsComponent.vue";
import ProjectComponent from "../pages/ProjectComponent.vue";
import ProjectDetailsComponent from "../pages/ProjectDetailsComponent.vue";
import NotFoundComponent from "../pages/NotFoundComponent.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: InternoComponent,
  },
  {
    path: "/blog",
    name: "Blog",
    component: BlogComponent,
  },
  {
    path: "/blogdetails",
    name: "BlogDetails",
    component: BlogDetailsComponent,
  },
  {
    path: "/project",
    name: "Project",
    component: ProjectComponent,
  },
  {
    path: "/projectdetails",
    name: "ProjectDetails",
    component: ProjectDetailsComponent,
  },
  {
    path: "/:CatchAll(.*)",
    name: "404",
    component: NotFoundComponent,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
