import Vue from 'vue';
import Electron from 'vue-electron';
import Resource from 'vue-resource';
import Sweetalert from 'vue-sweetalert';

import App from './App';

import router from './router';
import store from './store';

import { urlDB } from './data.js';

Vue.use(Electron);
Vue.use(Resource);
Vue.use(Sweetalert);

Vue.prototype.$state = store.state;

Vue.http.interceptors.push(( request , next ) => {
	if ( request.url === `${ urlDB }/Posts.json` ) {
		request.method = 'POST'
	};
	next();
});

JSONEditor.defaults.options = {
	theme: 'bootstrap3',
	iconlib: 'fontawesome4',
	object_layout:  'grid',
	disable_array_add: true,
	disable_array_delete: true,
	disable_array_reorder: true,
	disable_edit_json: true,
	disable_properties: true
};

new Vue({ router , store , ...App }).$mount('#wrapper');
