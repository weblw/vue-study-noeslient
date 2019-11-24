<template>
  <div>
    组件 B 
  </div>
</template>
<script>
import {findBrothersComponents} from '../utils/assist'
export default {
  name:'componentB',
  mounted(){
    const comB=findBrothersComponents(this,'componentB',false)
    console.log(comB)
  }
}
</script>