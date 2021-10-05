import Vue from "vue";
import VueRouter from "vue-router";
import ProductList from "../views/ProductList.vue";
import Login from "../views/Login.vue";
import Review from "../views/Review.vue";
import Cart from "../views/Cart.vue";

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
  {
    path: "/review",
    name: "review",
    component: Review
  },
  {
    path: "/cart",
    name: "cart",
    component: Cart
  },
];

const router = new VueRouter({
  mode: "history",
  routes,
});

export default router;
