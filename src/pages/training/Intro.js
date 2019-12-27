import React from 'react';
import Anchor from '@shared/Anchor';
import { section } from './training.scss';

/* eslint-disable react/jsx-no-literals, max-len, react/jsx-one-expression-per-line */
const Intro = () => (
	<div className={section}>
		<Anchor id="intro" />
		<h1>Training</h1>
		<p>
            Once you&apos;ve hatched a strong pokémon, you need to train it -- that means getting certain stats to the highest possible level. 90% of that will be training your pokémon&apos;s <a href="#evs">EVs</a>. The remaining 10% is to increase their Dynamax level, which you can do by remembering to feed them 10 <a href="/data#dynamax-candy">Dynamax Candies</a>.
		</p>
	</div>
);

export default Intro;
