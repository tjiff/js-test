import What from '@/views/descriptor/What.vue'
import Why from '@/views/descriptor/Why.vue'
import When from '@/views/descriptor/When.vue'
import How from '@/views/descriptor/How.vue'
import Using from '@/views/descriptor/Using.vue'

export const navList = [
  {
    title: '装饰器(decorator)',
    data: [
      {title: '什么是', to: '/descriptor/what', component: What},
      {title: '为什么需要', to: '/descriptor/why', component: Why},
      {title: '工作中什么时候用', to: '/descriptor/when', component: When},
      {title: '原理', to: '/descriptor/how', component: How},
      {title: '与Vue实践', to: '/descriptor/using', component: Using},
    ],
  },
]

export const routeList = navList.map(({data}) => data).flat().map(({title, to, component}) => ({
  path: to,
  name: title,
  component,
  meta: {title},
}))
