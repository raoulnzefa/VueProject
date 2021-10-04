import Vue from "vue";
import VueRouter from "vue-router";
import ProductList from "../views/ProductList.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: ProductList
  }
];

const router = new VueRouter({
  routes,
});

export default router;
