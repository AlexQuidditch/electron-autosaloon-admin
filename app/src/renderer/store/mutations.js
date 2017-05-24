export const setPosts = (state, payload) => {
	state.Posts = payload;
	state.PostsIsLoaded = true
};

export const modalOpen = ( state ) => {
	state.TestDrive.isOpened = true
};

export const modalClose = ( state ) => {
	state.TestDrive.isOpened = false
};
