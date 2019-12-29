import React from 'react';
import { kebabCase } from 'lodash';
import Anchor from '@shared/Anchor';
import PokeImage from '@shared/PokeImage';
import {
	centered, fixed, row, rightmost,
} from './groups.scss';

const getLink = (name) => `#${kebabCase(name.toLowerCase())}`;

const EggRow = ({
	name,
	image,
	eggGroups,
	setByGroup,
	setBySpecies,
}) => (
	<div className={row}>
		<Anchor id={kebabCase(name)} />
		<div className={fixed}><PokeImage image={image} /></div>
		<div className={centered}>
			<a href={getLink(name)} onClick={setBySpecies}>
				{name}
			</a>
		</div>
		<div className={rightmost}>
			{eggGroups.map((group) => (
				<a key={group} href={getLink(group)} onClick={setByGroup}>{group}</a>
			))}
		</div>
	</div>
);

export default EggRow;
