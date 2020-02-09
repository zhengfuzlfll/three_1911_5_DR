<template>
  <!-- <div>Star</div> -->
  <div id="star">
    <!-- 头部 -->
    <div class="title-all">
      <div class="title">
        <div class="left">
          <span class="iconfont icon-fanhui"></span>
        </div>
        <div class="middle">明星推荐</div>
        <div class="right">
          <span class="span1">首页</span>
          <span class="iconfont icon-gengduo"></span>
        </div>
      </div>
    </div>
    <!-- 主要内容 -->
    <div class="container">
      <div class="starNum">
        <h3>
          与
          <span>42</span>位
        </h3>
        <p>明星一同见证DR真爱祝福</p>
        <div class="line"></div>
      </div>
      <div class="list">
        <ul>
          <li>
            <img
              src="https://static.darryring.com/images/2019-10-21/1571655844/5dad90a431a2f..jpeg"
              alt
            />
            <h5>姜潮&麦迪娜：一生浪漫只给你</h5>
            <p>用行动表达的爱意，才是女人想要的爱情</p>
          </li>
          <li>
            <img
              src="https://static.darryring.com/images/2019-10-21/1571655844/5dad90a431a2f..jpeg"
              alt
            />
            <h5>姜潮&麦迪娜：一生浪漫只给你</h5>
            <p>用行动表达的爱意，才是女人想要的爱情</p>
          </li>
          <li>
            <img
              src="https://static.darryring.com/images/2019-10-21/1571655844/5dad90a431a2f..jpeg"
              alt
            />
            <h5>姜潮&麦迪娜：一生浪漫只给你</h5>
            <p>用行动表达的爱意，才是女人想要的爱情</p>
          </li>
        </ul>
      </div>
    </div>
    <!-- 右边导航 -->
    <div class="rightNavWrapper">
      <img src="../images/rightBtn_bg.png" alt />
      <div class="star-list">
        <ul>
          <li>姜潮&麦迪娜</li>
        </ul>
      </div>
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

#star {
  width: 100%;
  margin-bottom: vw(95);
  .title-all {
    width: 100%;
    border-bottom: vw(1) solid #ebedf0;

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
          font-size: vw(24);
        }

        .icon-gengduo {
          float: left;
          width: vw(44);
          height: vw(80);
          font-size: vw(30);
        }
      }
    }
  }

  .container {
    .starNum {
      width: 100%;
      height: vw(192);
      margin-top: vw(62);
      // background: yellow;
      text-align: center;

      h3 {
        font-size: vw(30);
        height: vw(82);

        span {
          font-size: vw(60);
        }
      }

      p {
        height: vw(28);
        margin-top: vw(40);
        font-size: vw(24);
      }

      .line {
        width: vw(54);
        // height: vw(54);
        border-top: vw(1) solid #000;
        margin: vw(20) auto;
      }
    }

    .list {
      ul {
        li {
          width: vw(660);
          height: vw(892);
          margin: auto;
          text-align: center;
          margin-bottom: vw(10);
          margin-top: vw(20);

          img {
            width: vw(660);
            height: vw(710);
          }

          h5 {
            width: vw(620);
            height: vw(32);
            padding: 0 vw(20);
            margin-top: vw(40);
            color: #222;
            font-size: vw(26);
            line-height: vw(32);
          }

          p {
            width: vw(620);
            height: vw(26);
            padding: 0 vw(20);
            color: #888;
            line-height: vw(26);
            font-size: vw(24);
            margin-top: vw(20);
          }
        }
      }
    }
  }

  /* 右边导航 */
  .rightNavWrapper {
    img {
      width: vw(90);
      height: vw(90);
      position: fixed;
      right: 0;
      bottom: vw(150);
    }
  }
}
</style>