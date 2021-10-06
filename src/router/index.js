import Vue from "vue";
import VueRouter from "vue-router";
import ProductList from "../views/ProductList.vue";
import Login from "../views/Login.vue";
import Review from "../views/Review.vue";
import Cart from "../views/Cart.vue";
import Register from "../views/Register.vue";

Vue.use(VueRouter);

//Below are the routes defined for each vue and the system will be routed accordingly
const routes = [
  {
    path: "/",
    name: "login",
    component: Login
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
  {
    path: "/register",
    name: "register",
    component: Register
  },
  {
    path: "/home",
    name: "home",
    component: ProductList
  },
];

const router = new VueRouter({
  mode: "history",
  routes,
});

export default router;
