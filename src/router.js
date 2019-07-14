import Vue from 'vue';
import Router from 'vue-router';

import Registration from './components/Registration.vue'
import Students from './components/Students.vue'

Vue.use(Router);

export default new Router({
    mode: 'history',
    base: process.env.BASE_URL,
    routes: [{
        path: '/',
        name: 'Students',
        component: Students,
    }, {
        path: '/registration',
        name: 'Registration',
        component: Registration,
    },],
    scrollBehavior() {
        return { x: 0, y: 0 }
    }
});