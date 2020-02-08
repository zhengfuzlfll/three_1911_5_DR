import Vue from "vue";
/*1、 vue-router */
import VueRouter from "vue-router";

/*5、 引入 */
import FirstPage from "../components/FirstPage.vue"; //进入即显示的页面
import Diamond from "../components/Diamond.vue"; //1、求婚钻戒
import Star from "../components/Star.vue"; //2、明星
import Quan from "../components/Quan.vue"; //3、甜甜圈
import Cart from "../components/Cart.vue"; //4、购物车
import My from "../components/My.vue"; //我的
import NotFound from "../components/NotFound.vue"; //404

/* 2、 */
Vue.use(VueRouter);

/* 3、实例化router并配置参数 */
let router = new VueRouter({
  routes: [
    /* 进入即显示 */
    /* 即访问路径为空时显示的页面 --------------*/
    {
      // name: "firstpage",
      path: "/",
      component: FirstPage
    },

    /* 1、求婚钻戒 */
    {
      name: "diamond",
      path: "/diamond",
      component: Diamond
    },
    /* 2、明星 */
    {
      name: "star",
      path: "/star",
      component: Star
    },
    /* 3、甜甜圈 */
    {
      name: "quan",
      path: "/quan",
      component: Quan
    },
    /*4、 购物车 */
    {
      name: "cart",
      path: "/cart",
      component: Cart
    },
    /* 5、我的 */
    {
      name: "my",
      path: "/my",
      component: My
    },

    /* 404 */
    {
      name: "notfound",
      path: "*",
      component: NotFound
    }
  ]
});
export default router;
