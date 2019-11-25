<template>
  <div>
    组件 A 
    <component-b></component-b>
    <component-b></component-b>
  </div>
</template>
<script>
import componentB from './component-b2'
export default {
  name:'componentA',
  components:{
    componentB
  }
}
</script>