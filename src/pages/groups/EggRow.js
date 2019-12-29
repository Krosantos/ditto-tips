import React from 'react';
import { kebabCase } from 'lodash';
import PokeImage from '@shared/PokeImage';
import {
	centered, fixed, row, rightmost,
} from './groups.scss';

const getLink = (group) => `#${kebabCase(group.toLowerCase())}`;

const EggRow = ({ name, image, eggGroups }) => (
	<div className={row}>
		<div className={fixed}><PokeImage image={image} /></div>
		<div className={centered}>{name}</div>
		<div className={rightmost}>
			{eggGroups.map((group) => (
				<a key={group} href={getLink(group)}>{group}</a>
			))}
		</div>
	</div>
);

export default EggRow;
