import { createWebHistory, createRouter } from "vue-router";
import { loadLayoutMiddleware } from "@/router/middleware/loadLayoutMiddleware";

import Login from "../pages/Login.vue";
import Register from "../pages/Register.vue";
import Home from "../pages/Home.vue";
import About from "../pages/About.vue";
import Promo from "../pages/Promo.vue";
import Menu from "../pages/Menu.vue";
import Table from "../pages/Table.vue";
import Cart from "../pages/Cart.vue";
import Checkout from "../pages/Checkout.vue";
import Thank from "../pages/Thank.vue";
import MyOrder from "../pages/MyOrder.vue";
import Dashboard from "../admin/Dashboard.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/about",
    name: "About",
    component: About,
  },
  {
    path: "/promotions",
    name: "Promotions",
    component: Promo,
  },
  {
    path: "/menu",
    name: "Menu",
    component: Menu,
  },
  {
    path: "/table",
    name: "Table",
    component: Table,
  },
  {
    path: "/cart",
    name: "Cart",
    component: Cart,
  },
  {
    path: "/login",
    name: "Login",
    component: Login,
  },
  {
    path: "/register",
    name: "Register",
    component: Register,
  },
  {
    path: "/checkout",
    name: "Checkout",
    component: Checkout,
  },
  {
    path: "/thank",
    name: "Thank",
    component: Thank,
  },

  {
    path: "/admin/dashboard",
    name: "Dashboard",
    component: Dashboard,
    meta: {
      layout: "LayoutPrivate",
    },
  },
  {
    path: "/myorder",
    name: "MyOrder",
    component: MyOrder,
    meta: {
      layout: "LayoutPrivate",
    },
  },
  {
    path: "/item/:itemId?",
    name: "admin-all-item",
    meta: {
      layout: "LayoutPrivate",
    },
    component: () => import("@/pages/category/Index.vue"),
  },
  {
    path: "/discount/:discountId?",
    name: "admin-all-discount",
    meta: {
      layout: "LayoutPrivate",
    },
    component: () => import("@/pages/category/Index.vue"),
  },
  {
    path: "/category/:categoryId?",
    name: "admin-all-category",
    meta: {
      layout: "LayoutPrivate",
    },
    component: () => import("@/pages/category/Index.vue"),
  },
  /*   {
    path: '/:pathMatch(.*)*',
    component: Home,
    // https://stackoverflow.com/questions/68504803/how-can-i-make-a-catch-all-other-route-in-vue-router-also-catch-the-url-when-p
  }, */
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});
router.beforeEach(loadLayoutMiddleware);

export default router;
