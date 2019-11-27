<template>
  <div>
    <button @click="handleChange('A')">显示A组件</button>
    <button @click="handleChange('B')">显示B组件</button>
    <button @click="handleChange('C')">显示C组件</button>
    <keep-alive>
      <component :is="component"></component>
    </keep-alive>    
  </div>
</template>
<script>
import componentA from './a'
import componentB from './b'
import componentC from './c'
export default {
  data(){
    return {
      component:componentA
    }
  },
  methods:{
    handleChange(component){
      if(component==='A'){
        this.component=componentA
      }else if(component==='B'){
        this.component=componentB
      }else if(component==='C'){
        this.component=componentC
      }
    }
  }
}
</script>