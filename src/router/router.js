import { createRouter, createWebHistory } from "vue-router";

import TodoItem from "@/components/txte.vue";
import HomeView from "@/views/HomeView.vue";

const routes = [
  {
    path: "/oi",
    name: "oi",
    component: TodoItem,
  },
  {
    path: "/oi2",
    name: "oi2",
    component: HomeView,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
