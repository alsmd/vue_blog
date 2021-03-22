import Vue from 'vue'
import Router from 'vue-router'
import Home from './components/pages/admin/Home.vue'
import Categorias from './components/pages/admin/Categorias.vue'
Vue.use(Router)


const routes = [
    {
        'path':'/admin',
        component:Home
    },
    {
        'path':'/admin/categoria',
        component:Categorias
    }
]

export default new Router({
    mode:'history',
    routes
})