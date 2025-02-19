import { createRouter, createWebHistory } from "vue-router";
import HomePage from "@/pages/HomePage.vue";
import CommercePage from "@/pages/CommercePage.vue";
import ServicePage from "@/pages/ServicePage.vue";
import RentalPage from "@/pages/RentalPage.vue";
import CategoryPage from "@/pages/CategoryPage.vue";
import ItemDetailPage from "@/pages/ItemDetailPage.vue";
import LoginPage from "@/pages/LoginPage.vue";
import RegisterPage from "@/pages/RegisterPage.vue";
import SobrePage from "@/pages/SobrePage.vue";
import SearchResults from "@/pages/SearchResults.vue";
import EncontrePage from "@/pages/EncontrePage.vue";
import PostDetailPage from "@/pages/PostDetailPage.vue"; // Adicione a importação

const routes = [
  { path: "/", component: HomePage },
  { path: "/comercios", component: CommercePage },
  { path: "/servicos", component: ServicePage },
  { path: "/aluguels", component: RentalPage },
  {
    path: "/category/:categoryType/:categoryId",
    name: "CategoryPage",
    component: CategoryPage,
  },
  {
    path: "/item/:itemId/:type",
    name: "ItemDetailPage",
    component: ItemDetailPage,
  },
  { path: "/login", component: LoginPage },
  { path: "/register", component: RegisterPage },
  { path: "/sobre", component: SobrePage },
  { path: "/search", name: "SearchResults", component: SearchResults },
  { path: "/encontre", component: EncontrePage },
  { path: "/post/:id", name: "PostDetailPage", component: PostDetailPage }, // Adiciona a rota para PostDetailPage
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
