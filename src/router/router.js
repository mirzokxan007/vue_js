import { createRouter,createWebHashHistory } from "vue-router";
import Home from '@/pages/Home.vue'
import Register from '@/pages/Registe.vue'
import Search from '@/pages/Search.vue'

export  default createRouter({
        history:createWebHashHistory(),
        routes:[
            {path: '/home',component:Home},
            {path: '/register',component:Register,alias:'/'},
            {path: '/search',component:Search}
        ]
})