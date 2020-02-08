<template>
  <div class="notfound">
    <div class="div1">404</div>
    <div class="div2">NotFound</div>
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
.notfound {
  width: 100%;
  text-align: center;
  .div1 {
    height: vw(40);
  }
}
</style>