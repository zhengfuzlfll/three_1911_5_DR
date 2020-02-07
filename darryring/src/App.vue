<template>
  <div id="app">
    <!-- <img alt="Vue logo" src="./assets/logo.png"> -->
    <!-- <HelloWorld msg="Welcome to Your Vue.js App" /> -->
    <!-- <HomePage></HomePage> -->
    <Dimond></Dimond>
    <Star></Star>
    <Quan></Quan>
    <Cart></Cart>
    <My></My>
    <ul class="nav-list">
      <li v-for="(item) in tags" :key="item.name">
        <span id="icon" :class="item.icon" class="iconfont"></span>
        <span>{{item.text}}</span>
      </li>
      <!-- <li>
        <img src="./images/icon_tab1H.png" alt />
        <span>明星</span>
      </li>
      <li>
        <img src="./images/icon_tab1H.png" alt />
        <span>甜甜圈</span>
      </li>
      <li>
        <img src="./images/icon_tab1H.png" alt />
        <span>购物袋</span>
      </li>
      <li>
        <img src="./images/icon_tab1H.png" alt />
        <span>我的</span>
      </li>-->
    </ul>
  </div>
</template>

<script>
// import HelloWorld from "./components/HelloWorld.vue";
// import HomePage from "./components/HomePage.vue";

// import FirstPage from "./components/FirstPage.vue";
import Dimond from "./components/Diamond.vue";
import Star from "./components/Star.vue";
import Quan from "./components/Quan.vue";
import Cart from "./components/Cart.vue";
import My from "./components/My.vue";

/* 去除默认样式 */
import "./css/base.css";
/* 字体图标 */
import "./iconfont/iconfont.css";

export default {
  name: "app",
  components: {
    // HelloWorld
    // HomePage
    Dimond,
    Star,
    Quan,
    Cart,
    My
  },
  data: function() {
    return {
      tags: [
        {
          name: "dimond",
          path: "/dimond",
          text: "求婚钻戒",
          component: "Dimond",
          icon: "icon-zuanshi1"
        },
        {
          name: "star",
          path: "/star",
          text: "明星",
          component: "Star",
          icon: "icon-mingxing"
        },
        {
          name: "quan",
          path: "/dimond",
          text: "甜甜圈",
          component: "Quan",
          icon: "icon-tiantianquankaobei"
        },
        {
          name: "cart",
          path: "/dimond",
          text: "购物车",
          component: "Cart",
          icon: "icon-bag"
        },
        {
          name: "my",
          path: "/dimond",
          text: "我的",
          component: "My",
          icon: "icon-my-select"
        }
      ]
    };
  }
};
</script>


<style lang='scss' scoped>
/* sass-loader */
/* #app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
} */
* {
  margin: 0;
  padding: 0;
}

html,
body {
  width: 100%;
  height: 100%;
}

@function vw($px) {
  @return ($px/750) * 100vw;
}
.nav-list {
  width: 100%;
  height: vw(94);
  border-top: vw(1) solid #c9c9c9;
  background: white;
  position: fixed;
  left: 0;
  bottom: 0;
  display: flex;
  align-items: center;
  // margin-bottom: vw(95);
  margin-top: vw(95);
  li {
    width: vw(150);
    height: vw(84);
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    color: #7f7f7f;
    #icon {
      // padding-top: vw(10);
      display: inline-block;
      width: vw(48);
      height: vw(48);
      margin: 0 vw(50) vw(10) vw(50);
      font-size: vw(30);
      text-align: center;
    }
    .iconfont {
      font-size: vw(50);
    }
    .icon-zuanshi1 {
      font-size: vw(50);
    }
    span {
      // color: #7f7f7f;
      font-size: vw(24);
    }
  }
}
</style>
