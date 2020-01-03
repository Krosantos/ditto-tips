import React from 'react';
import bigditto from '@images/bigditto.png';
import { useMediaQuery } from 'react-responsive';
import { container, bigDitto, centered } from './home.scss';

const TITLE = 'Ditto Tips';
const BREED = 'breed';
const TRAIN = 'train';
const AND = ' and ';
const COPY_START = 'A sloppy, small website to learn how to ';
const COPY_END = ' battle-ready pokémon.';

const Logo = () => (
	<div className={bigDitto}>
		<img alt="" src={bigditto} />
	</div>
);

const Home = () => {
	const isMobile = useMediaQuery({ query: '(max-width : 767px)' });

	return (
		<div className={container}>
			{isMobile && <h1>{TITLE}</h1>}
			<div>
				<Logo />
			</div>
			<p className={centered}>
				{COPY_START}
				<a href="/breeding">{BREED}</a>
				{AND}
				<a href="/training">{TRAIN}</a>
				{COPY_END}
			</p>
		</div>
	);
};

export default Home;
