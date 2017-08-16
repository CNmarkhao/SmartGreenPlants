import Login from './views/Login.vue'
import Index from './views/index.vue'

const routers = [
  {
    path: '/login',
    component: Login,
    name: '',
    hidden: true
  },
  {
    path: '/',
    meta: {
      title: ''
    },
    component: Index
  }

];
export default routers;