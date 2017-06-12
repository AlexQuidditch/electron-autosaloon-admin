import Vue from 'vue'
import { urlDB } from '../../data.js';

export default {
	sendToServer( JSONname , content ) {
		return Vue.http.put( `${ urlDB }/${ JSONname }.json` , content )
			.then( response => console.log(response) )
			.catch( error => console.error(error) )
	},
	fetchFromServer( JSONname ) {
		return Vue.http.get( `${ urlDB }/${ JSONname }.json`)
			.then( response => { return response.json() })
			.then( data => { return data })
			.catch( error => console.error(error) )
	}
};
