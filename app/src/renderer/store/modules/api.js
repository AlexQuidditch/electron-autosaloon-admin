import Vue from 'vue'

export default {
	getPosts(url) {
		return Vue.http.get(url)
			.then( response => { return response.json() })
			.then( data => {
				const getData = [];
				for (let key in data) {
					getData.unshift(data[key])
				};
				return getData;
			})
	}
};
