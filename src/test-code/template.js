export default{
  data(){
    return {
      show:false
    }
  },
  render:(h)=>{
    let childNode
    if(this.show){
      childNode=h('p','内容1')
    }else{
      childNode=h('p','内容2')
    }
    return h('div',{
      attrs:{
        id:'main'
      },
      class:{
        container:true
      },
      style:{
        color:'red'
      }
    },[childNode])
  }
}