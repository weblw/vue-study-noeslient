<template>
  <InputNumber :value='value' @input="handleChange"></InputNumber>
</template>
<script>
import InputNumber from './v-model'
export default {
  components:{InputNumber},
  data(){
    return {
      value:1
    }
  },
  methods:{
    handleChange(val){
      this.value=val
    }
  }
}
</script>