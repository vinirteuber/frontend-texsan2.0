import { createRouter, createWebHistory } from "vue-router";

import Home from "@/views/HomeView.vue";
import SobreNos from "@/views/SobrenosView.vue";
import Produtos from "@/views/ProdutosView.vue";
import Contato from "@/views/ContatoView.vue";

const routes = [
  {
    path: "/home",
    name: "home",
    component: Home,
  },

  {
    path: "/sobrenos",
    name: "sobrenos",
    component: SobreNos,
  },

  {
    path: "/produtos",
    name: "produtos",
    component: Produtos,
  },

  {
    path: "/contato",
    name: "contato",
    component: Contato,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
