<template>
  <div>
    组件A
    <component-b></component-b>
  </div>
</template>
<script>
import componentB from './component-b.vue'
export default {
  name:'componentA',
  components:{
    componentB
  },
  data(){
    return {
      name:'Arsen'
    }
  },
  methods:{
    sayHello(){
      console.log('Hello,Vue.js!!')
    }
  }
}
</script>