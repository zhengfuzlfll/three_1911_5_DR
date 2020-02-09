<template>
  <div id="login">
    <!-- 头部 -->
    <div class="title-top">
      <div class="title">
        <div class="left">
          <span class="iconfont icon-fanhui"></span>
        </div>
        <div class="middle">注册/登录</div>
        <div class="right">
          <span class="span1">首页</span>
          <span class="iconfont icon-gengduo"></span>
        </div>
      </div>
    </div>
    <!-- 主要内容 -->
    <div class="container">
      <div class="logo-img">
        <img class="img2" src="https://res.darryring.com/wapimg/common/lg_logo.jpg" alt />
      </div>

      <!-- 登录 -->
      <div class="login-form">
        <div class="phone">
          <input type="text" placeholder="请输入手机号" />
        </div>

        <div class="code">
          <input type="text" placeholder="请输入验证码" />
          <span>获取短信验证码</span>
        </div>
      </div>

      <!-- 同意注册协议 -->
      <div class="agree">
        <span class="span1">
          <i class="iconfont icon-dui"></i>
        </span>
        <span class="span2">
          同意
          <a>《注册协议》</a>
          和
          <a>《隐私条款》</a>
        </span>
      </div>

      <!-- 使用密码登录 -->
      <div class="login-password">
        <span>使用密码登录</span>
      </div>

      <!-- 登录按钮 -->
      <div class="login-btn">
        <span>登录</span>
      </div>
      <!-- 换方式登录 -->
      <div class="logon-other">
        <div class="other">
          其他登录方式
          <i class="iconfont icon-down"></i>
        </div>
        <div class="share">
          <ul>
            <li>
              <span class="iconfont icon-icon-xinlang"></span>
            </li>
            <li>
              <span class="iconfont icon-qq"></span>
            </li>
            <li>
              <span class="iconfont icon-zhifubao"></span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
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

#login {
  width: 100%;
  margin-bottom: vw(95);
  /* 头部 */
  .title-top {
    width: 100%;
    height: vw(78);
    border-bottom: vw(1) solid #ebedf0;
    background: white;

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
    width: vw(640);
    height: vw(928);
    margin: auto;

    .logo-img {
      width: vw(244);
      height: vw(164);
      margin: auto;
      padding-top: vw(40);

      .img2 {
        width: vw(244);
        height: vw(164);
        // padding-top: vw(10);
      }
    }

    /* 登录 */
    .login-form {
      margin-top: vw(55);

      .phone,
      .code,
      input {
        margin-bottom: vw(55);
        height: vw(90);
      }

      input {
        background-color: #f7f7f7;
        padding-left: vw(34);
      }

      .phone {
        input {
          width: vw(606);
        }
      }

      .code {
        input {
          width: vw(318);
          float: left;
        }

        span {
          float: right;
          display: inline-block;
          width: vw(252);
          height: vw(86);
          border: vw(1) solid #a57a68;
          text-align: center;
          line-height: vw(86);
          font-size: vw(30);
          color: #a57a68;
        }
      }
    }

    /* 同意注册协议 */
    .agree {
      width: vw(640);
      height: vw(40);
      margin-top: vw(40);
      font-size: vw(24);
      color: #888;
      position: relative;
      line-height: vw(40);

      .span1 {
        width: vw(32);
        height: vw(32);
        display: inline-block;
        background: red;
        border-radius: 50%;
        text-align: center;
        line-height: vw(32);
        position: absolute;
        top: 50%;
        transform: translateY(-50%);
        // margin-right: vw(32);
        // margin-right: vw(10);
        background: #a57a68;

        .icon-dui {
          font-size: vw(24);
          text-align: center;
          color: white;
          // width: vw(32);
          // height: vw(32);
          display: inline-block;
          position: absolute;
          left: 54%;
          top: 54%;
          transform: translate(-50%, -50%);
        }
      }

      .span2 {
        margin-left: vw(40);

        a {
          color: #a57a68;
        }
      }
    }

    /* 使用密码登录 */
    .login-password {
      width: vw(640);
      height: vw(24);
      margin-top: vw(65);
      text-align: center;
      line-height: vw(24);
      font-size: vw(24);
      color: #8c8c8c;
    }

    /* 登录按钮 */
    .login-btn {
      width: vw(640);
      height: vw(90);
      margin-top: vw(40);
      line-height: vw(90);
      text-align: center;
      color: white;
      background-color: #a57a68;
      font-size: vw(30);
    }

    /* 换方式登录 */
    .logon-other {
      width: vw(640);
      margin-top: vw(55);

      .other {
        height: vw(68);
        line-height: vw(68);
        text-align: center;
      }

      .share {
        width: vw(640);
        height: vw(106);
        margin-top: vw(35);

        ul {
          width: vw(640);
          height: vw(106);
          display: flex;
          justify-content: space-around;

          li {
            width: vw(96);
            height: vw(96);
            text-align: center;
            line-height: vw(96);
            color: rgb(196, 186, 181);
            margin: 0 vw(38);
            // float: left;

            .iconfont {
              font-size: vw(90);
            }
          }
        }
      }
    }
  }
}
</style>