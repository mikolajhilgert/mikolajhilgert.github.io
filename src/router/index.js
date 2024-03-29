import { createRouter, createWebHashHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import ResumeView from "../views/ResumeView.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/about",
    name: "about",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/AboutView.vue"),
  },
  {
    path: "/view-resume",
    name: "resume",
    component: ResumeView,
  },
];

const router = createRouter({
  history: createWebHashHistory(), // Use hash mode
  routes,
});

export default router;
