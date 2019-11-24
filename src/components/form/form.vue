<template>
  <form>
    <slot></slot>
  </form>
</template>
<script>
export default {
  name:'iForm',
  props:{
    model:{
      type:Object
    },
    rules:{
      type:Object
    }
  },
  data(){
    return {
      fields:[]
    }
  },
  created(){
    this.$on('on-form-item-add',(field)=>{
      if(field) this.fields.push(field)
    })
    this.$on('on-form-item-remove',(field)=>{
      if(field) this.fields.splice(this.fields.indexOf(field),1)
    })
  },
  provide(){
    return {
      form:this
    }
  },
  methods:{
    // 公开方法：全部重置数据
    resetFields(){
      this.fields.forEach(field=>{
        field.resetField()
      })
    },
    // 公开方法：全部校验数据，支持promise
    validate(callback){
      return new Promise(resolve=>{        
        let valid=true
        let count=0
        this.fields.forEach(field=>{
          field.validate('',errors=>{
            if(errors){
              valid=false
            }
            if(++count===this.fields.length){
              // 全部完成
              resolve(valid)
              if(typeof callback==='function'){                
                callback(valid)
              }
            }
          })
        })
      })
    }
  }  
}
</script>