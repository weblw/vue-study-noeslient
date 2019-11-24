<template>
  <div>
    <i-checkbox-group v-model="checkList" @on-change="handleChange">
      <i-checkbox label='李伟'>李伟</i-checkbox>
      <i-checkbox label='李小燕'>李小燕</i-checkbox>
    </i-checkbox-group>
  </div>
</template>
<script>
import iCheckbox from '../components/checkbox/checkbox'
import iCheckboxGroup from '../components/checkbox/checkbox-group'
export default {
  name:'CheckBox',
  components:{
    iCheckbox,
    iCheckboxGroup 
  },
  data(){
    return {
      checkList:['李伟']
    }
  },
  methods:{
    handleChange(){
      console.log(this.checkList)
    }
  }
}
</script>