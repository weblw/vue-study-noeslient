<template>
  <div>
    <i-button>普通按钮</i-button>
    <br>
    <i-button to="https://juejin.im">连接按钮</i-button>
    <br>
    <i-button to="https://juejin.im" target="_blank">新窗口打开链接按钮</i-button>
  </div>
</template>
<script>
import iButton from './button'
export default {
  components:{
    iButton
  }
}
</script>