import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import blog from '../views/Blog.vue'
// import blogDetails from '../views/BlogDetails.vue'


const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/blog',
    name: 'Blog',
    component: blog
  },
  // {
  //   path: '/blog/:slug',
  //   name: 'BlogDetail',
  //   component: blogDetails,
  //   props: true
  // }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
