import Router from 'vue-router'
import Vue from 'vue'

Vue.use(Router)

const Index = (resolve) => {
  import('@/views/index/index').then((module) => {
    resolve(module)
  })
}

const HelloWorld = (resolve) => {
  import('@/components/HelloWorld').then((module) => {
    resolve(module)
  })
}

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/index'
    },
    {
      path: '/index',
      component: Index
    },
    {
      path: '/helloWorld',
      component: HelloWorld
    }
  ]
})
