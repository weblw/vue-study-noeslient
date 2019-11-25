<template>
  <div>
    <A />
  </div>
</template>
<script>
import A from '../components/A'
export default {
  name:'Emitter',
  components:{
    A
  },
  created(){
    this.$on('test',(text)=>{
      alert(text)
    })
  }
}
</script>