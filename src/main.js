require('../src/css/main.css');

import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App.vue'
import store from './store'
import Home from './components/Home.vue'
import About from './components/About.vue'
import UMCom from './components/UMCom.vue'
import RedToken from './components/RedToken.vue'
import FindAChurch from './components/FindAChurch.vue'
import Source from './components/Source.vue'
import WhatWeDo from './components/WhatWeDo.vue'
import Sitecore from './components/Sitecore.vue'
import Kevin from './components/Kevin.vue'
import './registerServiceWorker'

Vue.use(VueRouter);

const routes = [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/about',
      name: 'About',
      component: About
    },

    {
      path: '/redtoken',
      name: 'RedToken',
      component: RedToken
    },

    {
      path: '/umcom',
      name: 'UMCom',
      component: UMCom
    },

    {
      path: '/find-a-church',
      name: 'FindAChurch',
      component: FindAChurch
    },

    {
      path: '/source',
      name: 'Source',
      component: Source
    },

    {
      path: '/what-we-do',
      name: 'WhatWeDo',
      component: WhatWeDo
    },

    {
      path: '/sitecore',
      name: 'Sitecore',
      component: Sitecore
    },

    {
      path: '/kevin-williams',
      name: 'Kevin',
      component: Kevin
    }

];

const router = new VueRouter({
mode: 'history',
routes,
scrollBehavior (to, from, savedPosition) {
    return { x: 0, y: 0 }
    }
});

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
