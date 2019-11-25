<template>
  <div>
    组件 A 
    <component-b></component-b>
  </div>
</template>
<script>
import componentB from './component-b1'
import {findComponentDownward} from '../utils/assist'
export default {
  name:'componentA',
  components:{
    componentB
  },
  mounted(){
    const comB=findComponentDownward(this,'componentB')
    if(comB){
      console.log(comB.name)
      comB.sayHello()
    }
  }
}
</script>