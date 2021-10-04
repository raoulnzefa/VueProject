import Vue from "vue";
import VueRouter from "vue-router";
import ProductList from "../views/ProductList.vue";
import Login from "../views/Login.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: ProductList
  },
  {
    path: "/login",
    name: "login",
    component: Login
  },
];

const router = new VueRouter({
  mode: "history",
  routes,
});

export default router;
