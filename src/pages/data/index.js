import React, { useMemo } from 'react';
import entries from './entries';
import Entry from './Entry';
import { container } from './entry.scss';

const Data = () => {
	const rows = useMemo(() => {
		const keys = Object.keys(entries).sort();

		return keys.map((key) => ({ name: key, ...entries[key] }));
	}, []);

	return (
		<div className={container}>
			{rows.map((entry) => <Entry key={entry.name} {...entry} />)}
		</div>
	);
};

export default Data;
