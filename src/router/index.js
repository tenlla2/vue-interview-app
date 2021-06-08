import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import FirstExercise from '../views/FirstExercise.vue';
import SecondExercise from '../views/SecondExercise.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/first-exercise",
    name: "FirstExercise",
    component: FirstExercise,
  },
  {
    path: "/second-exercise",
    name: "SecondExercise",
    component: SecondExercise,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
