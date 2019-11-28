<template>
  <InputNumber :value.sync='value' />
</template>
<script>
import InputNumber from './v-model3'
export default {
  components:{
    InputNumber
  },
  data(){
    return {
      value:1
    }
  }
}
</script>