import {createRouter, createWebHistory} from 'vue-router';
import CardBody from '/src/components/CardBody.vue'
const routes=[ {
    path: '/',
    redirect: { name: 'CardBody' }
  },
  {
    path: '/vitesite/h',
    name: 'CardBody',
    component: CardBody
  }]
const router=createRouter({
    history:createWebHistory(),
    routes,

})
export default router