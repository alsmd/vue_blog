import Vue from 'vue'
import Router from 'vue-router'
import FirstPage from './components/pages/FirstPage.vue'
import SecondPage from './components/pages/SecondPage.vue'
Vue.use(Router)


const routes = [
    {
        'path':'/new-route',
        component:FirstPage
    },
    {
        'path':'/another-route',
        component:SecondPage
    }

]

export default new Router({
    mode:'history',
    routes
})