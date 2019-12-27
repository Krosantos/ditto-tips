import React from 'react';
import Intro from './Intro';
import Basics from './Basics';
import Compatibility from './Compatibility';
import Inheritance from './Inheritance';
import IVs from './IVs';
import Ditto from './Ditto';
import Shiny from './Shiny';
import { container } from './breeding.scss';

const Breeding = () => (
	<div className={container}>
		<Intro />
		<Basics />
		<Compatibility />
		<Inheritance />
		<IVs />
		<Ditto />
		<Shiny />
	</div>
);

export default Breeding;
