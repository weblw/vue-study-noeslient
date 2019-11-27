<template>
  <div>
    组件A
  </div>
</template>
<script>
export default {
  mounted(){
    console.log('组件创建了')
  },
  beforeDestroy(){
    console.log('组件销毁了')
  }
}
</script>