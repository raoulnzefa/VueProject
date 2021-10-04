import Vue from "vue";
import VueRouter from "vue-router";
import ProductList from "../views/ProductList.vue";
import About from "../views/About.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: ProductList
  },
  {
    path: "/about",
    name: "Login",
    component: About
  },
];

const router = new VueRouter({
  routes,
});

export default router;
