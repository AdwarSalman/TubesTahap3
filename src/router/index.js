import { createRouter, createWebHistory } from 'vue-router'
// 1. Import halaman HomeView yang baru kamu buat
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/', // Ini adalah URL root (halaman utama)
      name: 'home',
      component: HomeView // 2. Tampilkan komponen HomeView saat URL '/' dibuka
    }
    // Kamu bisa menambahkan halaman lain di sini nanti, contoh:
    // {
    //   path: '/about',
    //   name: 'about',
    //   component: () => import('../views/AboutView.vue')
    // }
  ]
})

export default router