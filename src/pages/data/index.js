import React, { useMemo } from 'react';
import { kebabCase } from 'lodash';
import entries from './entries';
import Entry from './Entry';
import { container, entrylist, linkbox } from './entry.scss';

const SEPARATOR = <>&nbsp;&bull;&nbsp;</>; // eslint-disable-line react/jsx-no-literals

const Links = () => {
	const links = useMemo(() => {
		const keys = Object.keys(entries).sort();

		return keys.map((key) => ({ link: `#${kebabCase(key)}`, name: key }));
	}, []);

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

const Data = () => {
	const rows = useMemo(() => {
		const keys = Object.keys(entries).sort();

		return keys.map((key) => ({ link: kebabCase(key), name: key, ...entries[key] }));
	}, []);

	return (
		<div className={container}>
			<Links />
			<div className={entrylist}>
				{rows.map((entry) => <Entry key={entry.name} {...entry} />)}
			</div>
		</div>
	);
};

export default Data;
