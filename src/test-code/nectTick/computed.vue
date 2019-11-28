<template>
  
</template>
<script>
export default {
  computed:{
    fullName:{
      get(){
        return `${this.firstName} ${this.lastName}`
      },
      set(val){
        const names=val.split(' ')
        this.firstName=names[0]
        this.lastName=names[names.length-1]
      }
    }
  }
}
</script>