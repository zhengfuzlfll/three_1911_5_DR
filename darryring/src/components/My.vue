<template>
  <div id="cart">
    <!-- 头部 -->
    <div class="title-user">
      <div class="title">
        <div class="left">
          <!-- <span class="iconfont icon-fanhui"></span> -->
        </div>
        <div class="middle"></div>
        <div class="right">
          <span class="span1">首页</span>
          <span class="iconfont icon-shezhi"></span>
        </div>
      </div>
    </div>
    <!-- 头像 -->
    <div class="title-dr">
      <img class="image" src="https://static.darryring.com/comm/3x.png" alt />
      <div class="right">
        <span>DR</span>
        <img src="https://res.darryring.com/wapimg/member/user_img1.png" alt />
      </div>
    </div>
    <!-- 会员特权 -->
    <div class="vip-menber">
      <img src="https://res.darryring.com/wapimg/member/user_club.png" alt />
    </div>
    <!-- 收藏 -->
    <div class="collect">
      <div class="num">0</div>
      <div>收藏</div>
    </div>

    <!-- 订单 -->
    <div class="order-list">
      <div class="list-all">
        <span class="dingdan">我的订单</span>
        <div class="next">
          <span>查看全部</span>
          <span class="iconfont icon-xiayibu"></span>
        </div>
      </div>
      <div class="order">
        <ul>
          <li>
            <img src="https://res.darryring.com/wapimg/member/icon_waitpay.png" alt />
            <span>待付款</span>
          </li>
          <li>
            <img src="https://res.darryring.com/wapimg/member/icon_waitSend.png" alt />
            <span>待审核</span>
          </li>
          <li>
            <img src="https://res.darryring.com/wapimg/member/icon_waitReceive.png" alt />
            <span>已审核</span>
          </li>
          <li>
            <img src="https://res.darryring.com/wapimg/member/icon_waitGet.png" alt />
            <span>定制中</span>
          </li>
        </ul>
      </div>
    </div>
    <div class="gary-hr"></div>
    <!--  -->
    <div class="menu">
      <ul>
        <li>
          <img src="https://res.darryring.com/wapimg/member/user_menu3.png" alt />
          <span>我的预约</span>
        </li>
        <li>
          <img src="https://res.darryring.com/wapimg/member/user_menu1.png" alt />
          <span>纪念日</span>
        </li>
        <li>
          <img src="https://res.darryring.com/wapimg/member/user_menu4.png" alt />
          <span>粉钻预约</span>
        </li>
        <li>
          <img src="https://res.darryring.com/wapimg/member/user_menu5.png" alt />
          <span>卡包</span>
        </li>
        <li>
          <img src="https://res.darryring.com/wapimg/member/user_menu8.png" alt />
          <span>我的勋章</span>
        </li>
        <li>
          <img src="https://res.darryring.com/wapimg/member/user_menu11.png" alt />
          <span>意见反馈</span>
        </li>
        <li>
          <img src="https://res.darryring.com/wapimg/member/user_menu9.png" alt />
          <span>客服</span>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {};
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

#cart {
  /* 头部 */
  .title-user {
    width: 100%;
    height: vw(78);
    border-bottom: vw(1) solid #ebedf0;
    background: white;
    margin-bottom: vw(28);

    .title {
      width: vw(680);
      height: vw(78);
      margin: auto;

      // background: red;
      text-align: center;
      line-height: vw(78);

      .left {
        float: left;

        .icon-fanhui {
          width: vw(32);
          height: vw(80);
          font-size: vw(30);
        }
      }

      .middle {
        float: left;
        width: vw(450);
        height: vw(80);
        // margin: 0 vw(150);
      }

      .right {
        float: left;
        width: vw(180);
        height: vw(80);
        color: #a57a68;

        .span1 {
          display: block;
          float: left;
          width: vw(56);
          height: vw(80);
          padding: 0 vw(20);
          font-size: vw(26);
        }

        .icon-shezhi {
          float: left;
          width: vw(44);
          height: vw(80);
          font-size: vw(40);
          color: #ccc;
        }
      }
    }
  }

  /* 头像 */
  .title-dr {
    width: vw(710);
    height: vw(134);
    margin-bottom: vw(28);
    // background: red;
    margin: auto;
    position: relative;

    .image {
      width: vw(130);
      height: vw(130);
      float: left;
    }

    .right {
      float: left;
      width: vw(217);
      height: vw(100);
      position: absolute;
      bottom: 0;
      left: vw(130);
      font-size: vw(30);

      span {
        margin-left: vw(14);
      }

      img {
        width: vw(74);
        height: vw(30);
        margin-left: vw(14);
      }
    }
  }

  /* 会员特权 */
  .vip-menber {
    width: 100%;
    height: vw(100);

    // background: url(https://res.darryring.com/wapimg/member/user_club.png);
    img {
      height: vw(100);
    }
  }

  // 收藏
  .collect {
    width: vw(630);
    height: vw(130);
    padding: 0 vw(30);
    margin: 0 vw(30);
    text-align: center;
    color: #666;
    border-bottom: vw(1) solid #ccc;

    // line-height: vw(130);
    .num {
      padding-top: vw(30);
      margin-bottom: vw(10);
    }
  }

  /* 订单 */
  .order-list {
    .list-all {
      width: vw(642);
      height: vw(32);
      padding: vw(24) 0;
      margin: auto;
      // background: red;

      .dingdan {
        float: left;
      }

      .next {
        float: right;
        color: #ccc;
        font-size: vw(24);
        text-align: center;

        .icon-xiayibu {
          font-size: vw(34);
          display: inline-block;
          height: vw(32);
          width: vw(32);
          line-height: vw(32);
          text-align: center;
        }
      }
    }

    .order {
      width: vw(690);
      height: vw(164);
      margin: auto;

      ul {
        width: vw(690);
        height: vw(164);
        display: flex;
        justify-content: space-around;
        align-items: center;

        li {
          width: vw(162);
          height: vw(148);
          margin-top: vw(14);
          font-size: vw(30);
          display: flex;
          justify-content: space-around;
          flex-direction: column;
          align-items: center;

          img {
            width: vw(54);
            height: vw(52);
          }
        }
      }
    }
  }

  .gary-hr {
    width: 100%;
    height: vw(20);
    background: #f4f4f4;
  }

  /* menu */
  .menu {
    width: vw(690);
    height: vw(336);
    padding: vw(30);
    // background: red;

    ul {
      width: vw(690);
      height: vw(336);
      display: flex;
      justify-content: flex-start;
      align-items: center;
      flex-wrap: wrap;

      li {
        width: vw(172);
        height: vw(148);
        margin-top: vw(15);
        display: flex;
        justify-content: center;
        flex-direction: column;
        align-items: center;

        /* 不缩小 */
        flex-shrink: 0;

        img {
          height: vw(54);
          width: vw(54);
        }
      }
    }
  }
}
</style>