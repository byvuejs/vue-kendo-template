import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

// lazy load
const HomeComponent = () => import(/* webpackChunkName: "Home" */ '@/components/Home');
const FormComponent = () => import(/* webpackChunkName: "Form" */ '@/components/MyForm');
const GridComponent = () => import(/* webpackChunkName: "Grid" */ '@/components/MyGrid');
const ChartComponent = () => import(/* webpackChunkName: "Chart" */ '@/components/MyChart');
const DialogComponent = () => import(/* webpackChunkName: "Dialog" */ '@/components/MyDialog');
const UploadComponent = () => import(/* webpackChunkName: "Upload" */ '@/components/MyUpload');
const DropdownComponent = () => import(/* webpackChunkName: "Dropdown" */ '@/components/MyDropdown');
const ChatComponent = () => import(/* webpackChunkName: "Chat" */ '@/components/MyChat');

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'Home',
      component: HomeComponent
    }
    ,{
      path: '/form',
      name: 'Form',
      component: FormComponent
    }
    ,{
      path: '/grid',
      name: 'Grid',
      component: GridComponent
    }
    ,{
      path: '/chart',
      name: 'Chart',
      component: ChartComponent
    },
    {
      path: '/dialog',
      name: 'Dialog',
      component: DialogComponent
    },
    {
      path: '/upload',
      name: 'Upload',
      component: UploadComponent
    },
    {
      path: '/dropdown',
      name: 'Dropdown',
      component: DropdownComponent
    },
    {
      path: '/chat',
      name: 'Chat',
      component: ChatComponent
    },
    {
      path: '/*',
      redirect: { name: 'Home' }
    }
  ]
});
