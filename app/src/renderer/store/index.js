import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

import state from './state.js';
import * as mutations from './mutations.js';
import * as actions from './actions.js';

export default new Vuex.Store({
	strict: process.env.NODE_ENV !== 'production',
	state , mutations , actions
});
