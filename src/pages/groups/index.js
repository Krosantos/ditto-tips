import React, { useMemo } from 'react';
import pokedex from '@constants/pokedex.json';
import PokeImage from '@shared/PokeImage';

import byGroup from './byGroup';

const EggGroups = () => {
	// const eggGroups = useMemo(() => byGroup(), []);
	const doop = pokedex.map((mon) => mon.image);

	return (
		<div>
			{doop.map((name) => (
				<PokeImage image={name} />
			))}
		</div>
	);
};

export default EggGroups;
