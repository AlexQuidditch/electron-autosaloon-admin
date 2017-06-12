import swal from 'sweetalert2';
import api from './modules/api.js';

// saving prices for cars

export const saveCars = ( context , payload ) => {
	return context.commit('saveCars', payload)
};

// saving cars from catalogue

export const saveCatalogueChery = ( context , payload ) => {
	return context.commit( 'saveCatalogueChery' , payload )
};
export const saveCatalogueChangan = ( context , payload ) => {
	return context.commit( 'saveCatalogueChangan', payload )
};
export const saveCatalogueHawtai = ( context , payload ) => {
	return context.commit( 'saveCatalogueHawtai', payload )
};

export const saveTestDrive = ( context , payload ) => {
	return context.commit( 'saveTestDrive' , payload )
};
export const saveFilter = ( context , payload ) => {
	return context.commit( 'saveFilter' , payload )
};

export const saveService = ( context , payload ) => {
	return context.commit( 'saveService', payload )
};
export const saveServices = ( context , payload ) => {
	return context.commit( 'saveServices', payload )
};

export const saveVideos = ( context , payload ) => {
	return context.commit( 'saveVideos', payload )
};

export const fetchFromServer = ( context , payload ) => {
	return api.fetchFromServer( payload )
		.then( response => context.commit( 'fetchJSON', [ payload , response ] ))
		.catch( error => console.error( error ));
};

export const sendToServer = ( context ) => {
	swal(
		'Секунду...',
		'Данные загружаются на сервер',
		'info'
	);
	let successedOps = 0;
	api.sendToServer( 'Catalogue' , context.state.content.Catalogue )
		.then( response => {
			successedOps += 1;
			console.log( response )
		})
		.catch( error => console.error( error ) );
	api.sendToServer( 'Cars' , context.state.content.Cars )
		.then( response => {
			successedOps += 1;
			console.log( response )
		})
		.catch( error => console.error(error) );
	api.sendToServer( 'Service' , context.state.content.Service )
		.then( response => {
			successedOps += 1;
			console.log( response )
		})
		.catch( error => console.error(error) );
	api.sendToServer( 'Services' , context.state.content.Services )
		.then( response => {
			successedOps += 1;
			console.log( response )
		})
		.catch( error => console.error(error) );
	api.sendToServer( 'Filter' , context.state.content.Filter )
		.then( response => {
			successedOps += 1;
			console.log( response )
		})
		.catch( error => console.error(error) );
	api.sendToServer( 'TestDrive' , context.state.content.TestDrive )
		.then( response => {
			successedOps += 1;
			console.log( response )
		})
		.catch( error => console.error(error) );
	api.sendToServer( 'Videos' , context.state.content.Videos )
		.then( response => {
			successedOps += 1;
			console.log( response )
		})
		.catch( error => console.error(error) );
	setTimeout( () => {
		if ( successedOps === 7 ) {
			swal(
				'Сохранено!',
				'Изменения сохранены.',
				'success'
			);
		} else {
			swal(
				'Сохранено!',
				'Изменения сохранены.',
				'error'
			);
		}
	} , 5000 );
};

// saving post for blog

export const sendPost = ( context , payload ) => {
	return api.sendToServer( 'Posts' , payload )
		.then( response => {
			swal(
				'Ура!',
				'Пост добавлен, посмотрите в блоге.',
				'success'
			);
		})
		.catch( error => {
			swal(
				'Что-то пошло не так...',
				'Попробуйте ещё раз!',
				'error'
			)
		});
};
