import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import store from "../store";

Vue.use(VueRouter);

const routes = [
  {
    path: "*",
    component: Home
  },
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/tasks",
    name: "Tasks",
    component: () =>
      import(/* webpackChunkName: "tasks" */ "@/views/Tasks.vue"),
    meta: {
      auth: true
    }
  },
  {
    path: "/login",
    name: "Login",
    component: () =>
      import(/* webpackChunkName: "tasks" */ "@/views/Auth/Login.vue"),
    meta: {
      blockLoggedIn: true
    }
  },
  {
    path: "/sign-up",
    name: "SignUp",
    component: () =>
      import(/* webpackChunkName: "sign-up" */ "@/views/Auth/SignUp.vue"),
    meta: {
      blockLoggedIn: true
    }
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

router.beforeEach((to, from, next) => {
  const authenticatedUser = store.getters["auth/isAuthenticated"];
  const unauthorizedRoutes = to.matched.some((record) => record.meta.auth);
  const blockedRoutes = to.matched.some((record) => record.meta.blockLoggedIn);
  if (unauthorizedRoutes && !authenticatedUser) next("login");
  if (blockedRoutes && authenticatedUser) next("/tasks");
  else next();
});

export default router;
