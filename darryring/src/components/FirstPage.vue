<template>
  <!-- <dir>FirstPage</dir> -->
  <div id="home_first">
    <!-- 头部 -->
    <div class="header">
      <span class="iconfont icon-dacha"></span>
      <div class="right">
        <span class="span2">Darry Ring</span>
        <div class="second">
          <span class="span3">首页</span>
          <span class="iconfont icon-gengduo"></span>
        </div>
      </div>
    </div>
    <!-- 主要内容区 -->
    <div class="container">
      <div class="page1">
        <img src="https://res.darryring.com/wapactivity/drSem_store/banner.jpg" alt />
      </div>
      <div class="page2">
        <img class="img1" src="https://res.darryring.com/wapactivity/drSem_store/p2_t.png" alt />
        <div class="line"></div>
        <p>
          基于让爱情变的更美好的品牌使命，
          <br />致力于对真爱唯一的传播与见证
          <br />
          <span>男士一生仅能定制一枚</span>
          <br />赠予一生唯一真爱的人
          <br />在求婚的那一刻，许下对爱一生的承诺
        </p>
        <ul class="list">
          <li>
            <h5>
              求婚场地
              <br />的选择？
            </h5>
            <p>点击了解 &gt;</p>
          </li>
          <li>
            <h5>
              求婚场地
              <br />的选择？
            </h5>
            <p>点击了解 &gt;</p>
          </li>
          <li>
            <h5>
              求婚场地
              <br />的选择？
            </h5>
            <p>点击了解 &gt;</p>
          </li>
        </ul>
        <img class="img2" src="https://res.darryring.com/wapactivity/drSem_store/p2_b.jpg" alt />
      </div>
      <div class="page3">
        <img src="https://res.darryring.com/wapactivity/drSem_store/p3_t.png" alt />
        <div class="line"></div>
        <p>
          每一枚DR求婚钻戒背后，都有一个相爱一生的故事。
          <br />期待我们也能见证您一生唯一的爱情！
        </p>
      </div>
    </div>
    <!-- 底部 -->
    <div class="footer"></div>
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

#home_first {
  height: 100%;
  width: 100%;

  /* 头部 */
  .header {
    width: vw(670);
    height: vw(86);
    // margin: auto;
    background-color: white;
    padding: 0 vw(40);
    position: fixed;
    top: 0;

    span {
      display: block;
      height: vw(88);
      line-height: vw(88);
    }

    .icon-dacha {
      width: vw(44);

      text-align: center;
      color: #231815;
      font-size: vw(44);
      float: left;
    }

    .right {
      float: right;

      .span2 {
        width: vw(402);
        float: left;
        text-align: center;
        font-size: vw(36);
      }

      .second {
        float: left;
        width: vw(174);
        height: vw(88);
        color: #a57a68;

        span {
          float: left;
          text-align: center;
        }

        .span3 {
          width: vw(56);
          padding: 0 vw(20);
          // margin-right: vw(24);
          font-size: vw(26);
        }

        .icon-gengduo {
          width: vw(40);
          height: vw(88);
          // padding: 0 vw(24);
          font-size: vw(40);
        }
      }
    }
  }

  /* 主要内容区 */
  .container {
    margin-top: vw(88);

    .page1 {
      img {
        width: 100%;
        height: vw(586);
        /* 消除底下3px的距离 */
        display: block;
      }
    }

    .page2 {
      background-color: #f4eeee;

      .img1 {
        width: 100%;
        height: vw(52);
        margin-top: vw(75);
        margin-bottom: vw(62.5);
      }

      .line {
        width: vw(187.5);
        border-top: 1px solid #000;
        margin: auto;
        margin-bottom: vw(34);
      }

      p {
        width: 100%;
        height: vw(270);
        color: #2a0305;
        text-align: center;
        margin-bottom: vw(102);

        font-size: vw(30);
        /* 行文字的间距 */
        line-height: vw(50);

        span {
          color: #b47455;
        }
      }

      .list {
        width: vw(694);
        height: vw(216);
        // background: yellow;
        margin-bottom: vw(84);
        margin: auto;
        margin-bottom: vw(84);

        li {
          width: vw(204);
          height: vw(204);
          border: vw(3) solid white;
          margin-left: vw(14);
          float: left;
          border-radius: 50%;
          text-align: center;
          background-color: #e8dfde;
          font-size: vw(26);

          h5 {
            width: vw(204);
            height: vw(72);
            line-height: vw(40);
            margin-top: vw(36);
          }

          p {
            width: vw(204);
            height: vw(24);
            margin-top: vw(22);
            color: #b47456;
            font-size: vw(24);
          }
        }
      }

      .img2 {
        width: 100%;
        height: vw(280);
      }
    }

    .page3 {
      background: radial-gradient(#f3e6dd, #dacdc3);
      margin-top: 2px;

      img {
        width: 100%;
        height: vw(40);
        margin-top: vw(104);
        margin-bottom: vw(42);
      }

      .line {
        width: vw(187.5);
        border-top: vw(1) solid #000;
        margin: auto;
      }

      p {
        height: vw(108);
        text-align: center;
        line-height: vw(30);
        margin-bottom: vw(54);
        font-size: vw(32);
        color: #2a0305;
        // font: .67rem/1.3rem simsun;
      }
    }
  }
}
</style>