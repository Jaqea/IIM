import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'


import mixins from './mixins'
import 'css/base/base.less'
import 'assets/css/base/element_theme.scss'
import ElementUI from 'element-ui';
Vue.use(ElementUI);
Vue.mixin(mixins)



import 'api/axios'
import * as service from 'service/index'
Vue.prototype.$service = service

import * as publicMethods from 'util/index'
Vue.prototype.$publicMethods = publicMethods

import * as form from 'form/index'
Vue.prototype.$form = form



Vue.config.productionTip = false

new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app')