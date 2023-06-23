import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import DefaultLayout from '@/layouts/DefaultLayout.vue'
import Home from '@/views/Home.vue'
import Add from '@/views/Add.vue'
import Maintenance from '@/views/mainten.vue'

const routes: Array<RouteRecordRaw> = [
    {
         // Default Layout
         path: '/',
         name: 'Defalut',
         component: DefaultLayout,
         children: [
            {
                path: '',
                name: 'Home',
                component: Home,
                meta: {
                    title: 'Home'
                }
            },
            {
                path: 'add',
                name: 'Add',
                component: Add,
                meta: {
                    title: 'Add bill'
                }
            },
            {
                path: 'maintence',
                name: 'maintence',
                component: Maintenance,
                meta: {
                    title: 'carmaintence'
                }
            },
        ]
    },
]


const router = createRouter({
    history: createWebHistory(import.meta.env.URL),
    routes
})

router.beforeEach((to, _, next) => {

    if(typeof(to.meta.title) == 'string'){
        document.title = to.meta.title
    }

    next()
})

export default router