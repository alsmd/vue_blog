require('./bootstrap');

window.Vue = require('vue').default;
import router from './router.js'
import commom from './common.js'
import ViewUI from 'view-design';
import 'view-design/dist/styles/iview.css';
import locale from 'view-design/dist/locale/en-US';

Vue.use(ViewUI,{locale});


Vue.mixin(commom)
Vue.component('main-app', require('./components/MainApp.vue').default);


const app = new Vue({
    el: '#app',
    router
});
