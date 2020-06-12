import Home from '@vue-view/Home.vue';
import Foo from '@vue-view/Foo.vue';
import Bar from '@vue-view/Bar.vue';

export default {
    mode: 'history',
    routes: [
        { name: 'Home', path: '/', component: Home },
        { name: 'Foo', path: '/foo', component: Foo },
        { name: 'Bar', path: '/bar', component: Bar },
    ],
};
