import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'Home',
      component: () => import(/* webpackChunkName: "Home" */ '@/components/Home')
    }
    ,{
      path: '/form',
      name: 'Form',
      component: () => import(/* webpackChunkName: "Form" */ '@/components/MyForm')
    }
    ,{
      path: '/grid',
      name: 'Grid',
      component: () => import(/* webpackChunkName: "Grid" */ '@/components/MyGrid')
    }
    ,{
      path: '/chart',
      name: 'Chart',
      component: () => import(/* webpackChunkName: "Chart" */ '@/components/MyChart')
    },
    {
      path: '/dialog',
      name: 'Dialog',
      component: () => import(/* webpackChunkName: "Dialog" */ '@/components/MyDialog')
    },
    {
      path: '/upload',
      name: 'Upload',
      component: () => import(/* webpackChunkName: "Upload" */ '@/components/MyUpload')
    },
    {
      path: '/dropdown',
      name: 'Dropdown',
      component: () => import(/* webpackChunkName: "Dropdown" */ '@/components/MyDropdown')
    },
    {
      path: '/chat',
      name: 'Chat',
      component: () => import(/* webpackChunkName: "Chat" */ '@/components/MyChat')
    },
    {
      path: '/*',
      redirect: { name: 'Home' }
    }
  ]
});
