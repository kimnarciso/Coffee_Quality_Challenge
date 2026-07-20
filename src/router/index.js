import { createRouter, createWebHistory } from "vue-router";

import HomeView from "../views/HomeView.vue";
import AvaliacoesView from "../views/AvaliacoesView.vue";
import RankingView from "../views/RankingView.vue";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      component: HomeView,
    },
    {
      path: "/avaliacoes",
      component: AvaliacoesView,
    },
    {
      path: "/ranking",
      component: RankingView,
    },
    {
  path: "/cafe/:id",
  name: "coffee-details",
  component: () => import("@/views/CoffeeDetailsView.vue")
},
{
  path: "/:pathMatch(.*)*",
  name: "not-found",
  component: () => import("@/views/NotFoundView.vue"),
  meta: {
    hideHeader: true,
    hideFooter: true
  }
}
  ],
});

export default router;