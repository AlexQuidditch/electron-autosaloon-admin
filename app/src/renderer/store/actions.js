import api from './modules/api.js';

export const getPosts = ( context , payload ) => {
	return api.getPosts( payload )
		.then( response => context.commit('setPosts', response))
		.catch( error => console.error(error));
};

export const modalClose = ( context ) => {
	return context.commit('modalClose')
};
