import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Register from '@/components/Register'
import Login from '@/components/Login'
import Poems from '@/components/Poems'
import CreatePoem from '@/components/createPoem'
import ViewPoem from '@/components/ViewPoem'
import EditPoem from '@/components/EditPoem'


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'root',
      component: HelloWorld
    },
    {
      path: '/register',
      name: 'register',
      component: Register
    },
    {
      path: '/login',
      name: 'login',
      component: Login
    },
    {
      path: '/poems',
      name: 'poems',
      component: Poems
    },
    {
      path: '/poems/create',
      name: 'poems-create',
      component: CreatePoem
    },
    {
      path: '/poems/:poemId',
      name: 'poem',
      component: ViewPoem
    },
    {
      path: '/poems/:poemId/edit',
      name: 'poems-edit',
      component: EditPoem
    },
  ]
})
