import React, { useCallback } from 'react';
import { kebabCase } from 'lodash';
import Anchor from '@shared/Anchor';
import EggRow from './EggRow';
import { eggGroup, button, header } from './groups.scss';

const RETURN = 'Return to Top';

const EggGroup = ({ group, groupName }) => {
	const returnToTop = useCallback(() => window.scrollTo(0, 0), []);

	return (
		<div className={eggGroup}>
			<Anchor id={kebabCase(groupName)} />
			<div className={header}>
				<h2>{groupName}</h2>
				<button className={button} onClick={returnToTop} type="button">{RETURN}</button>
			</div>
			<div>
				{group.map(({ name, image, eggGroups }) => (
					<EggRow key={name} eggGroups={eggGroups} image={image} name={name} />
				))}
			</div>
		</div>
	);
};

export default EggGroup;
