export const saveCars = ( state , payload ) => {
	state.content.Cars = payload;
};

export const saveCatalogueChery = ( state , payload ) => {
	state.content.Catalogue.chery = payload;
};
export const saveCatalogueChangan = ( state , payload ) => {
	state.content.Catalogue.changan = payload;
};
export const saveCatalogueHawtai = ( state , payload ) => {
	state.content.Catalogue.hawtai = payload;
};

export const saveTestDrive = ( state , payload ) => {
	state.content.TestDrive.options = payload;
};
export const saveFilter = ( state , payload ) => {
	state.content.Filter.categories = payload;
};
export const saveMainPage = ( state , payload ) => {
	state.content.TestDrive.description = payload;
};

export const saveService = ( state , payload ) => {
	state.content.Service[payload[0]] = payload[1];
};
export const saveServices = ( state , payload ) => {
	state.content.Services[payload[0]] = payload[1];
};

export const saveVideos = ( state , payload ) => {
	state.content.Videos = payload;
};

export const fetchJSON = ( state , payload ) => {
	state.content[payload[0]] = payload[1];
};
