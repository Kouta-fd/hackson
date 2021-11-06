import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Form',
      component: ()=>
        import(/* webpackChunkName: "about" */"../pages/form")
    },
    {
      path: '/checkList',
      name: 'checkList',
      component: ()=>
        import(/* webpackChunkName: "about" */"../pages/checkList")
    }
  ]
})
