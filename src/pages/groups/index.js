import React, { useCallback, useState } from 'react';
import ByGroups from './ByGroups';
import BySpecies from './BySpecies';
import { container, button, buttonHolder } from './groups.scss';

const BY_GROUP = 'By Group';
const BY_SPECIES = 'By Species';

const EggGroups = () => {
	const [view, setView] = useState(BY_SPECIES);
	const setByGroup = useCallback(() => {
		setView(BY_GROUP);
	}, []);
	const setBySpecies = useCallback(() => {
		setView(BY_SPECIES);
	}, []);

	return (
		<div className={container}>
			<div className={buttonHolder}>
				<button className={button} onClick={setByGroup} type="button">{BY_GROUP}</button>
				<button className={button} onClick={setBySpecies} type="button">{BY_SPECIES}</button>
			</div>
			{view === BY_GROUP && <ByGroups setByGroup={setByGroup} setBySpecies={setBySpecies} />}
			{view === BY_SPECIES && <BySpecies setByGroup={setByGroup} setBySpecies={setBySpecies} />}
		</div>
	);
};

export default EggGroups;
