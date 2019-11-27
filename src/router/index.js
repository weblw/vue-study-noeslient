import Vue from 'vue'
import VueRouter from 'vue-router'

// 引入组件
import Index from '../Views/index.vue'
import Alert from '../Views/Alert.vue'
import Form from '../Views/Form.vue'
import Checkbox from '../Views/Checkbox.vue'
import Display from '../Views/Display.vue'
import Render from '../test-code/render/render'
import Table from '../Views/Table.vue'
import TableSlot from '../Views/TableSlot.vue'
import TableRender from '../Views/TableRender.vue'
import TableSlotRender from '../Views/TableSlotRender.vue'
import TreeTest from '../test-code/tree/index.vue'
import ButtonTest from '../test-code/button/index.vue'
import Tree from '../Views/Tree.vue'

Vue.use(VueRouter)

const routes=[
  {
    path:'/',
    component:Index
  },
  {
    path:'/alert',
    component:Alert
  },
  {
    path:'/form',
    component:Form
  },
  {
    path:'/checkbox',
    component:Checkbox
  },
  {
    path:'/display',
    component:Display
  },
  {
    path:'/render',
    component:Render
  },
  {
    path:'/table',
    component:Table
  },
  {
    path:'/table-slot',
    component:TableSlot
  },
  {
    path:'/table-render',
    component:TableRender
  },
  {
    path:'/table-slot-render',
    component:TableSlotRender
  },
  {
    path:'/tree-test',
    component:TreeTest
  },
  {
    path:'/button-test',
    component:ButtonTest
  },
  {
    path:'/tree',
    component:Tree
  }
]

const router=new VueRouter({
  routes
})

export default router