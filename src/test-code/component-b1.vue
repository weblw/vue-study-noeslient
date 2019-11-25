<template>
  <div>
    组件 B 
  </div>
</template>
<script>
export default {
  name:'componentB',
  data(){
    return {
      name:'Bresn'
    }
  },
  methods:{
    sayHello(){
      console.log('Hello,Vue.js!!')
    }
  }
}
</script>