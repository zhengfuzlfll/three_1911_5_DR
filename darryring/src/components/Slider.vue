<template>
  <div id="slider">
    <ul>
      <li>
        <img src="https://res.darryring.com/wapimg/index/indexSider_xrl.gif" alt />
      </li>
      <li>
        <span class="iconfont icon-kefu"></span>
        <span>在线客服</span>
      </li>
      <li>
        <span class="iconfont icon-lihe"></span>
        <span>预约有礼</span>
      </li>
      <li>
        <span class="iconfont icon-up"></span>
        <span>回顶部</span>
      </li>
    </ul>
    <!-- <div class="other"></div> -->
  </div>
</template>
<script>
export default {
  name: "Slider",
  data() {
    return {};
  }
};
</script>
<style lang='scss' scoped>
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

#slider {
  width: 100%;
  height: 100%;

  ul {
    position: fixed;
    right: vw(20);
    top: 50%;

    li {
      width: vw(100);
      height: vw(100);
      margin-bottom: vw(30);
      // background-color: red;
      background-color: rgba(111, 111, 111, 0.2);
      border-radius: vw(10);
      text-align: center;
      font-size: vw(12);

      span {
        display: block;
        width: vw(100);
      }

      span:nth-child(1) {
        height: vw(60);
        line-height: vw(60);
      }

      .iconfont {
        font-size: vw(50);
        color: rgb(220, 182, 179);
      }
    }

    li:nth-child(1) {
      // width: vw(88);
      // height: vw(88);
      // background-color: white;
      background: none;
      margin-bottom: vw(50);

      img {
        width: vw(88);
        // height: vw(88);
      }
    }
  }
  // .other {
  //   height: vw(2000);
  //   background: yellow;
  // }
}
</style>