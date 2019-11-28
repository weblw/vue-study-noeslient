<template>
  <InputNumber v-model="value"></InputNumber>
</template>
<script>
import InputNumber from './v-model'
export default {
  components:{InputNumber},
  data(){
    return {
      value:1
    }
  }
}
</script>