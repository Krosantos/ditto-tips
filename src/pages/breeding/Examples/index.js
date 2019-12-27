import React from 'react';
import Anchor from '@shared/Anchor';
import Snorlax from './Snorlax';
import { section } from '../breeding.scss';

/* eslint-disable react/jsx-no-literals, react/jsx-one-expression-per-line, max-len, react/jsx-max-depth, max-lines-per-function */
const Examples = () => (
	<>
		<div className={section}>
			<Anchor id="examples" />
			<h2>Examples</h2>
			<p>
            We&apos;re going to run through a few not-totally unrealistic examples, to demonstrate how these concepts work together in practice. This is gonna be a bit wordy -- feel free to ignore it, or to jump around.
			</p>
			<ul>
				<li>
					<a href="#snorlax">
						Getting a 5IV Snorlax from raid parents
					</a>
				</li>
				<li>Merging a cool ball and a Hidden Ability</li>
				<li>Using a 5IV0S Ditto to make a Trick Room Hatterene</li>
				<li>Making a Stud Trapinch to sire future children</li>
			</ul>
		</div>
		<Snorlax />
	</>
);

export default Examples;
