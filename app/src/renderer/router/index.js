import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

import routes from './routes.js';
import { scrollBehavior } from './options.js';

export default new Router({
	mode: 'history',
	base: __dirname,
	scrollBehavior,
	routes
});
