import Vue from 'vue';
import Vuex from 'vuex';
import VueRouter from 'vue-router';
import { sync as defaultSync } from 'vuex-router-sync';

import StoreConfig from './core/store';
import RouterConfig from './core/router';
import { sync as configSync } from './core/sync';

import App from './core/App.vue';

Vue.use(Vuex);
Vue.use(VueRouter);

const store = new Vuex.Store(StoreConfig);
const router = new VueRouter(RouterConfig);

defaultSync(store, router);
configSync(store, router);

export default new Vue({
    store,
    router,

    el: '#app',
    render: h => h(App),
});
