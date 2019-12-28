import pokedex from '@constants/pokedex.json';

const byGroup = () => {
	const groupHash = {};

	pokedex.forEach((mon) => {
		console.log(mon.name);
		mon.eggGroups.forEach((group) => {
			if (!groupHash[group])
				groupHash[group] = [];
			groupHash[group].push(mon.image);
		});
	});

	return groupHash;
};

export default byGroup;
