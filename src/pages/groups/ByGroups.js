import React, { useMemo } from 'react';
import { kebabCase } from 'lodash';
import pokedex from '@constants/pokedex.json';
import EggGroup from './EggGroup';
import { linkbox } from './groups.scss';

const byGroup = () => {
	const groupHash = {};

	pokedex.forEach(({ eggGroups, image, name }) => {
		eggGroups.forEach((group) => {
			if (!groupHash[group])
				groupHash[group] = [];
			groupHash[group].push({ eggGroups, image, name });
		});
	});

	return groupHash;
};

const SEPARATOR = <>&nbsp;&bull;&nbsp;</>; // eslint-disable-line react/jsx-no-literals

const Links = ({ keys }) => {
	const links = useMemo(() => keys.map((key) => ({ link: `#${kebabCase(key)}`, name: key })), [keys]);

	return (
		<div className={linkbox}>
			{links.map(({ name, link }, index) => (
				<div key={name}>
					<a href={link}>{name}</a>
					{(index !== links.length - 1) && SEPARATOR }
				</div>
			))}
		</div>
	);
};

const ByGroups = ({ setBySpecies, setByGroup }) => {
	const groups = useMemo(() => byGroup(), []);
	const keys = useMemo(() => Object.keys(groups).sort(), [groups]);

	return (
		<div>
			<div>
				<Links keys={keys} />
			</div>
			<div>
				{keys.map((key) => (
					<EggGroup
						key={key}
						group={groups[key]}
						groupName={key}
						setByGroup={setByGroup}
						setBySpecies={setBySpecies}
					/>
				))}
			</div>
		</div>
	);
};

export default ByGroups;
