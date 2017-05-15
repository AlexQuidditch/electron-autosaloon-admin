import Vue from 'vue';
import Electron from 'vue-electron';
import Resource from 'vue-resource';

import App from './App';

import router from './router';

Vue.use(Electron);
Vue.use(Resource);

Vue.config.debug = true;
Vue.config.devtools = true;

/* eslint-disable no-new */
new Vue({
	router , ...App
}).$mount('#wrapper')
