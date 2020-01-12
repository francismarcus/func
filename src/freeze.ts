const freeze = <T> (obj: T): Readonly<T> => {

	if (typeof obj !== 'object') return obj;
	// Already frozen
	if (Object.isFrozen(obj)) return obj;
	// Freeze props recursively before freezing self
	for (let key of Object.getOwnPropertyNames(obj)) {
		if (Array.isArray(obj) && key === 'length') continue;
		obj[key] = typeof obj[key] === 'object' ? freeze(obj[key]) : obj[key];
	}
	return Object.freeze(obj);
};

export default freeze;
