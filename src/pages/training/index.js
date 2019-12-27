import React from 'react';
import { container } from './training.scss';
import Intro from './Intro';
import Evs from './Evs';
import Items from './Items';
import Jobs from './Jobs';
import Fighting from './Fighting';
import Reset from './Reset';

const Training = () => (
	<div className={container}>
		<Intro />
		<Evs />
		<Items />
		<Jobs />
		<Fighting />
		<Reset />
	</div>
);

export default Training;
