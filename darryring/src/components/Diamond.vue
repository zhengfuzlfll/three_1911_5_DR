<template>
  <div id="diamond">
    <!-- 头部 -->
    <div class="title">
      <div class="location">
        <div class="left">
          <span class="iconfont icon-pingfangxinxi"></span>
          <span class="span2">桂林市</span>
        </div>
        <div class="right">
          <div class="container">
            <span class="language">简</span>
            <span class="iconfont icon-gengduo"></span>
          </div>
        </div>
      </div>
      <div class="more"></div>
    </div>

    <!-- 主要内容区 -->
    <div class="wrapper">
      <div class="scroller">
        <div class="container">
          <div class="i-main">
            <div class="floor1">
              <img
                src="https://static.darryring.com/images/2020-01-10/15786243145e17e53a3b516.jpg"
                alt
              />
            </div>
            <div class="gary-hr"></div>
            <div class="floor2">
              <img src="https://res.darryring.com/wapimg/newyear.jpg" alt />
            </div>
            <div class="gary-hr"></div>
            <div class="floor3">
              <img
                src="https://static.darryring.com/images/2019-06-05/15597275605cf78dc80418d.jpg"
                alt
              />
              <div class="experience">
                <p class="p1">全球真爱体验店</p>
                <p class="p2">情侣首次预约到店领取限量精美礼品</p>
                <p class="p3">立即预约</p>
              </div>
            </div>
            <div class="gary-hr"></div>
            <div class="floor4">
              <img
                class="bg-img"
                src="https://static.darryring.com/images/2020-01-10/15786375525e1818f0b1f3b.jpg"
                alt
              />
              <div class="uniqueness">
                <ul>
                  <li>
                    <img
                      src="https://static.darryring.com/images/2020-01-10/15786282945e17f4c62677c.jpg"
                      alt
                    />
                  </li>
                  <li>
                    <img
                      src="https://static.darryring.com/images/2020-01-10/15786365185e1814e6e0fe9.jpg"
                      alt
                    />
                  </li>
                  <li>
                    <img
                      src="https://static.darryring.com/images/2020-01-10/15786368095e181609bef29.jpg"
                      alt
                    />
                  </li>
                </ul>
              </div>
            </div>
            <div class="gary-hr"></div>
            <div class="floor5">
              <ul>
                <li>
                  <img
                    src="https://static.darryring.com/images/2020-01-10/15786385385e181ccad3e2b.jpg"
                    alt
                  />
                </li>
                <div class="gary-hr"></div>
                <li>
                  <img
                    src="https://static.darryring.com/images/2020-01-10/15786387935e181dc976bb6.jpg"
                    alt
                  />
                </li>
                <div class="gary-hr"></div>
                <li>
                  <img
                    src="https://static.darryring.com/images/2020-01-10/15786386555e181d3fd0077.jpg"
                    alt
                  />
                </li>
                <div class="gary-hr"></div>
                <li>
                  <img
                    src="https://static.darryring.com/images/2020-01-10/15786387265e181d86365f9.jpg"
                    alt
                  />
                </li>
              </ul>
            </div>
            <div class="gary-hr"></div>
            <div class="floor6">
              <div class="explore">
                <div class="explore-dr">探索DR</div>
                <div class="line"></div>
              </div>
              <div class="explore-list">
                <ul>
                  <li>
                    <img
                      src="https://static.darryring.com/images/2020-01-09/15785394795e1699d7b0522.jpg"
                      alt
                    />
                  </li>
                  <li>
                    <img
                      src="https://static.darryring.com/images/2019-11-29/15750116735de0c5594660e.jpg"
                      alt
                    />
                  </li>
                </ul>
              </div>
            </div>
            <div class="floor7">
              <div class="wedding">明星婚礼同款</div>
              <img
                src="https://static.darryring.com/images/2019-06-21/15610866545d0c4abe17b80.jpg"
                alt
              />
            </div>
            <div class="floor8">
              <div class="recommend">明星推荐</div>
              <ul>
                <li>
                  <img
                    src="https://static.darryring.com/images/2019-01-31/15489485635c531453db9a5.jpg"
                    alt
                  />
                  <p>粉丝故事</p>
                </li>
                <li>
                  <img
                    src="https://static.darryring.com/images/2020-01-10/15786391725e181f4492ab2.jpg"
                    alt
                  />
                  <p>活动专题</p>
                </li>
              </ul>
            </div>
            <div class="ICP-info">迪阿股份有限公司 粤ICP备11012085号</div>
          </div>
        </div>
      </div>
    </div>
    <Slider></Slider>
  </div>
</template>

<script>
import Slider from "./Slider.vue";
export default {
  components: {
    Slider
  }
};
</script>

<style lang='scss' scoped>
html,
body {
  width: 100%;
  height: 100%;
}

@function vw($px) {
  @return ($px/750) * 100vw;
}

#diamond {
  margin-bottom: vw(95);
  /* 头部 */
  .title {
    .location {
      text-align: center;
      width: 100%;
      height: vw(80);
      // background: url(../images/logo2.png) no-repeat;
      /* 背景图 */
      background: #fff url(../images/logo2.png) no-repeat 50%;
      background-size: auto 72%;

      position: relative;
      line-height: vw(80);

      .left {
        width: vw(128);
        height: vw(80);
        position: absolute;
        left: vw(32);
        bottom: 0;
        color: #9b745c;

        .icon-pingfangxinxi {
          height: vw(80);
          font-size: vw(36);
          line-height: vw(80);
        }

        .span2 {
          font-size: vw(24);
        }
      }

      .right {
        width: vw(114);
        height: vw(80);
        position: absolute;
        right: vw(32);
        bottom: vw(0);
        color: #9f7962;
        font-size: vw(32);

        .language {
          padding-right: vw(20);
        }

        .icon-gengduo {
          font-size: vw(36);
        }
      }
    }
  }

  /* 主要内容区 */
  .wrapper {
    .scroller {
      .container {
        .i-main {
          background: rgb(244, 244, 244);

          .floor1 {
            width: 100%;
            height: vw(600);

            img {
              width: 100%;
              height: vw(600);
            }
          }

          .gary-hr {
            width: 100%;
            height: vw(20);
            background: #f4f4f4;
          }

          .floor2 {
            width: vw(710);
            height: vw(332);
            margin: auto;

            img {
              width: vw(710);
              height: vw(332);
            }
          }

          .floor3 {
            background: white;
            width: vw(710);
            margin: auto;

            img {
              width: vw(710);
              height: vw(290);
              margin: auto;
            }

            .experience {
              width: vw(710);
              height: vw(216);
              margin-top: vw(44);
              text-align: center;

              .p1 {
                height: vw(36);
                font-size: vw(36);
                line-height: vw(36);
                margin-bottom: vw(26);
                color: #222;
              }

              .p2 {
                color: #222;
                font-size: vw(24);
                height: vw(24);
                line-height: vw(24);
                margin-bottom: vw(38);
              }

              .p3 {
                width: vw(192);
                height: vw(60);
                font-size: vw(30);
                border: vw(1) solid #a57a68;
                margin: auto;
                text-align: center;
                line-height: vw(60);
                color: #a57a68;
              }
            }
          }

          .floor4 {
            width: 100%;
            height: vw(834);
            position: relative;

            .bg-img {
              width: 100%;
              height: vw(516);
            }

            .uniqueness {
              width: vw(710);
              height: vw(358);
              background: white;
              margin: auto;
              position: absolute;
              left: 50%;
              transform: translateX(-50%);
              top: vw(470);

              ul {
                li {
                  float: left;
                  width: vw(236);
                  height: vw(372);

                  img {
                    width: vw(236);
                    height: vw(372);
                  }
                }
              }
            }
          }

          .floor5 {
            width: 100%;

            ul {
              li {
                img {
                  width: 100%;
                  height: vw(340);
                }
              }
            }
          }

          .floor6 {
            .explore {
              width: vw(710);
              height: vw(86);
              margin: auto;
              margin-bottom: vw(42);
              text-align: center;
              position: relative;
              // background: white;

              .explore-dr {
                width: vw(119);
                height: vw(86);
                padding: 0 vw(24);
                margin: auto;
                font-size: vw(28);
                line-height: vw(86);
                position: absolute;
                left: 50%;
                top: 50%;
                transform: translate(-50%, -50%);
                background: rgb(244, 244, 244);
                z-index: 2;
              }

              .line {
                position: absolute;
                z-index: 1;
                top: 50%;
                left: 50%;
                transform: translate(-50%, -50%);
                // margin-left: -2.8rem;
                width: vw(420);
                height: 0;
                line-height: 0;
                font-size: 0;
                border-bottom: 0.02667rem solid #222;
                border-bottom: vw(1) solid #222;
              }
            }

            .explore-list {
              ul {
                li {
                  width: vw(710);
                  height: vw(590);
                  margin: auto;

                  img {
                    width: vw(710);
                    height: vw(590);
                  }
                }

                li:nth-child(1) {
                  margin-bottom: vw(58);
                }

                li:nth-child(1) {
                  margin-bottom: vw(28);
                }
              }
            }
          }

          .floor7 {
            width: vw(710);
            margin: auto;

            .wedding {
              height: vw(28);
              font-size: vw(28);
              text-align: center;
              margin-bottom: vw(58);
              margin-top: vw(28);
            }

            img {
              width: vw(710);
              height: vw(770);
              margin-bottom: vw(28);
            }
          }

          .floor8 {
            width: vw(710);
            margin: auto;
            background: rgb(244, 244, 244);

            .recommend {
              height: vw(28);
              font-size: vw(28);
              text-align: center;
              margin-bottom: vw(58);
              margin-top: vw(28);
            }

            ul {
              width: vw(710);
              margin: auto;
              height: vw(356);

              li {
                width: vw(340);
                height: vw(356);
                float: left;
                font-size: vw(30);

                img {
                  width: vw(340);
                  height: vw(300);
                  margin-bottom: vw(28);
                }

                p {
                  width: vw(340);
                  text-align: center;
                }
              }

              li:nth-child(2) {
                float: right;
              }
            }
          }

          .ICP-info {
            width: 100%;
            height: vw(80);
            font-size: vw(24);
            line-height: vw(80);
            text-align: center;
            color: #ccc;
          }
        }
      }
    }
  }
}
</style>