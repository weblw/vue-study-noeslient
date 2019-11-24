<template>
  <div>
    组件B
  </div>
</template>
<script>
import {findComponentUpward} from '../utils/assist'
export default {
  name:'componentB',
  mounted(){
    const comA=findComponentUpward(this,'componentA')
    if(comA){
      console.log(comA.name)
      comA.sayHello()
    }
  }
}
</script>