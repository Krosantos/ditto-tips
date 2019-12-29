import React, { useMemo } from 'react';
import { sortBy } from 'lodash';
import pokedex from '@constants/pokedex.json';
import EggRow from './EggRow';
import { eggGroup } from './groups.scss';

const SPECIES = 'Egg Groups By Species';

const bySpecies = () => {
	const result = [];

	pokedex.forEach(({ eggGroups, image, name }) => {
		result.push({ eggGroups, image, name });
	});

	return sortBy(result, 'name');
};

const BySpecies = ({ setBySpecies, setByGroup }) => {
	const species = useMemo(() => bySpecies(), []);

	return (
		<div className={eggGroup}>
			<h2>{SPECIES}</h2>
			{species.map(({ eggGroups, image, name }) => (
				<EggRow
					key={name}
					eggGroups={eggGroups}
					image={image}
					name={name}
					setByGroup={setByGroup}
					setBySpecies={setBySpecies}
				/>
			))}
		</div>
	);
};

export default BySpecies;
