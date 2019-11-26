const Child={
  render:(h)=>{
    return h('p','text')
  }
}

export default {
  render:(h)=>{
    const children=Array.apply(null,{
      length:5
    }).map(()=>{
      return h(Child)
    })
    return h('div',children)
  }
}