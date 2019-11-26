{
  render:(h)=>{
    function cloneVNode(vnode) {
      // 递归遍历所有子节点，并克隆
      const cloneChildren=vnode.children && vnode.children.map(vnode=>cloneVNode(vnode))
      const cloned=h(vnode.tag,vnode.data,cloneChildren)
      cloned.text=vnode.text
      cloned.isComment=vnode.isComment
      cloned.componentOptions=vnode.componentOptions
      cloned.elm=vnode.elm
      cloned.context=vnode.context
      cloned.ns=vnode.ns
      cloned.isStatic=vnode.isStatic
      cloned.key=vnode.key
      return cloned
    }
    const vNodes=this.$slots.default===undefined?[]:this.$slots.default
    const cloneVNodes=this.$slots.default===undefined?[]:vNodes.map(vnode=>cloneVNode(vnode))
    return h('div',[
      vNodes,
      cloneVNodes
    ])
  }
}