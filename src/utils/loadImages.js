const cache = {};

function importAll(r) {
	r.keys().forEach((key) => {
		cache[key] = r(key);
	});
}

importAll(require.context('@images/mon/', true, /\.png$/));
