import Vue from 'vue'

const AlertComponent =Vue.extend({
  template:'<div>{{message}}</div>',
  data(){
    return {
      message:'Hello,Aresn'
    }
  }
})

const component=new AlertComponent().$mount()
document.body.appendChild(component.$el)

import Vue from 'vue'
import Notification from './notifacation.vue'
const props={} // 这里可以传入一些组件的props选项
const Istance=new Vue({
  render(h){
    return h(Notification,{
      props:props
    })
  }
})
const component =Istance.$mount()
document.body.appendChild(component.$el)