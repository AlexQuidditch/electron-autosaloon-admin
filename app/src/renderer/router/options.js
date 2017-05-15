export const scrollBehavior = (to, from, savedPosition) => {
	const position = {};
	if (to.hash) {
		position.selector = to.hash
	} else {
		return { x: 0, y: 0 }
	}
};
