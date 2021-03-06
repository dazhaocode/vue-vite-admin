import { createRouter, createWebHashHistory } from 'vue-router'
import Home from "views/Home.vue"


const routes = [
    {
        path: '/',
        name: 'home',
        component: Home,
        children: []
    },
]
const router = createRouter({
    history: createWebHashHistory(),
    routes
})
export default router;