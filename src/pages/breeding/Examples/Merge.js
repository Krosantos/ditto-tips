import React from 'react';
import Anchor from '@shared/Anchor';
import snorlax from '@images/mon/snorlax.png';
import avalugg from '@images/mon/avalugg.png';
import destinyknot from '@images/items/destinyknot.png';
import everstone from '@images/items/everstone.png';
import { section, itemcell } from '../breeding.scss';

/* eslint-disable react/jsx-no-literals, react/jsx-one-expression-per-line, max-len, react/jsx-max-depth, max-lines-per-function */
const Merge = () => (
	<div className={section}>
		<Anchor id="merge" />
		<h2>Merging Ball and Hiden Ability</h2>
		<p>
            We&apos;re players of <i>taste</i>, <i>refinement</i>, and <i>dignity</i>. We appreciate <i>aesthetics</i>. It is insufficient that we breed powerful pokémon -- we want their balls to match their color schemes in order to maximally flex on our enemies.
		</p>
	</div>
);

export default Merge;
