<template>
  <div>
    {{msg}}
    <button @click="handleClick">向上触发事件</button>
  </div>
</template>
<script>
import emitter from '../mixin/emitter'
export default {
  name:'compB',
  mixins:[emitter],
  data(){
    return {
      msg:'原始数据'
    }
  },
  methods:{
    showMessage(text){
      this.msg=text
    },
    handleClick(){
      this.dispatch('Emitter','test',this.msg)
    }
  },
  created(){
    this.$on('on-message',this.showMessage)
  }
}
</script>