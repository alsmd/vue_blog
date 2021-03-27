import Vue from 'vue'
import Router from 'vue-router'
import Home from './admin/pages/Home.vue'
import Categorias from './admin/pages/Categorias.vue'
import Tags from './admin/pages/Tags.vue'
Vue.use(Router)


const routes = [
    {
        'path':'/admin',
        component:Home
    },
    {
        'path':'/admin/categoria',
        component:Categorias
    },
    {
        'path':'/admin/tag',
        component:Tags
    }
]

export default new Router({
    mode:'history',
    routes
})