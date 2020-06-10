import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home";
import Portfolio from "../views/portfolio/Portfolio.vue"
import Stocks from "../views/stocks/Stocks.vue"

Vue.use(VueRouter);

const routes = [
    {path: '/', component: Home, name: Home},
    {path: '/portfolio', component: Portfolio, name: Portfolio},
    {path: '/stocks', component: Stocks, name: Stocks}
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
