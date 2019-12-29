import React from 'react';
import { kebabCase } from 'lodash';
import Anchor from '@shared/Anchor';
import EggRow from './EggRow';
import { eggGroup } from './groups.scss';

const EggGroup = ({ group, groupName }) => (
	<div className={eggGroup}>
		<Anchor id={kebabCase(groupName)} />
		<h2>{groupName}</h2>
		<div>
			{group.map(({ name, image, eggGroups }) => (
				<EggRow key={name} eggGroups={eggGroups} image={image} name={name} />
			))}
		</div>
	</div>
);

export default EggGroup;
