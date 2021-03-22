import Vue from 'vue'
import Router from 'vue-router'
import Home from './components/pages/admin/Home.vue'
Vue.use(Router)


const routes = [
    {
        'path':'/admin',
        component:Home
    }
]

export default new Router({
    mode:'history',
    routes
})