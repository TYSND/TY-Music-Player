import Vue from 'vue'
import VueRouter from 'vue-router'
const PlayMusic = () => import('@/view/PlayMusic.vue')

Vue.use(VueRouter)
const routes = [
    {
        path: '/',
        redirect: '/play-music'
    },
    {
        path: '/play-music',
        component: PlayMusic,
    },
]

const router = new VueRouter({
    routes
})
export default router