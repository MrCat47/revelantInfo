import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import RegistrarseView from '@/views/RegistrarseView.vue'
import IniciarSeccionView from '@/views/IniciarSeccionView.vue'
import PerfilView from '@/views/PerfilView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/registrarse',
    name: 'registrarse',
    component: RegistrarseView
  },
  {
    path: '/iniciarSeccion',
    name: 'iniciarSeccion',
    component: IniciarSeccionView
  },
  {
    path: '/perfil',
    name: 'perfil',
    component: PerfilView
  },

]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
