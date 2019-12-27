import React from 'react';
import Anchor from '@shared/Anchor';
import drizzile from '@images/mon/drizzile.png';
import sobble from '@images/mon/sobble.png';
import clefairy from '@images/mon/clefairy.png';
import cleffa from '@images/mon/cleffa.png';
import conkeldurr from '@images/mon/conkeldurr.png';
import timburr from '@images/mon/timburr.png';
import { section } from './breeding.scss';

/* eslint-disable react/jsx-no-literals, react/jsx-one-expression-per-line */
const Basics = () => (
	<div className={section}>
		<Anchor id="basic-mechanics" />
		<h2>Basic Mechanics</h2>
		<p>
            Pokémon hatch from eggs. Eggs are acquired when two compatible pokémon are left together in the <a href="/data#nursery">Nursery</a>. An egg will (in most cases) hatch into the least-evolved species of the mother&apos;s family. Eggs laid by <img alt="" src={drizzile} /> Drizzile will hatch into <img alt="" src={sobble} /> Sobble, eggs laid by <img alt="" src={clefairy} /> Clefairy will hatch into <img alt="" src={cleffa} /> Cleffa, eggs laid by <img alt="" src={conkeldurr} /> Conkeldurr will hatch into <img alt="" src={timburr} /> Timburr, and so forth.
		</p>
		<p>Eggs hatch after you&apos;ve walked a certain number of steps, dependent on the species inside the egg. You can accelerate this process by keeping a pokémon with the <a href="/data#flame-body">Flame Body</a> ability in your party -- this will cut the number of steps required in half.</p>
	</div>
);

export default Basics;
