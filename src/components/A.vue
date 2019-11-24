<template>
  <div>
    <button @click="handleClick">触发事件</button>
    <B />
  </div>
</template>
<script>
import emitter from '../mixin/emitter'
import B from './B'
export default {
  name:'compA',
  mixins:[emitter],
  components:{
    B
  },
  methods:{
    handleClick(){
      this.boradcast('compB','on-message','Hello Vue!!')
    }
  }
}
</script>