import Vue from 'vue'
import Vuex from 'vuex'

import VueRouter from 'vue-router'
import App from './App'
// import router from './router'
import store from './store'
import Home from './pages/home/index'
// import ZI from './pages/home/ZI'
// import ZII from './pages/login/ZII'
import Login from './pages/login/index'

Vue.use(VueRouter);
Vue.use(Vuex);

const routes = [
  { 
    path:'/home', 
    name:'home', 
    component: Home, 
    props:route => ({query: route.query}),
    // children:[
    //   {
    //     path:'/home/zi',
    //     component:ZI
    //   }
    // ] 
  },
  { 
    path:'/login', 
    name:'login', 
    component: Login,
    // children:[
    //   {
    //     path:"/login/:cid",
    //     component:ZII,
    //     props:true
    //   }
    // ]
  },
]

const router = new VueRouter({
  linkActiveClass:'active',
  linkExactActiveClass:'active',
  routes,
  mode:"history"
})

Vue.config.productionTip = false

// /home
router.beforeEach((to, from, next) => {
  const { fullPath } = to
  if (!localStorage.getItem('token') && fullPath !== '/login') {
    next('/login')
  }else{
    next()
  }
})


new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
