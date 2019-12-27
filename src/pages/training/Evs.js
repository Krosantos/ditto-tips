import React from 'react';
import Anchor from '@shared/Anchor';
import { section } from './training.scss';

/* eslint-disable react/jsx-no-literals, max-len, react/jsx-one-expression-per-line */
const EVs = () => (
	<div className={section}>
		<Anchor id="evs" />
		<h2>What are EVs?</h2>
		<p>
            EVs, or Effort Values, represent the amount of training a pokémon has received. A pokémon can accumulate up to 510 points of EVs total. For each of the six stats, HP, Attack, Defense, Special Attack, Special Defense, and Speed, a pokémon can gain up to 252 EVs.
		</p>
		<p>
            EVs make a significant difference in the final strength of a pokémon -- EV-trained pokémon can have stats up to ~33% higher than non-EV trained counterparts. Every 4 EVs accumulated in a stat give a pokémon an additional 1 point towards that stat at level 100. A well-trained pokémon will make use of all 510 EVs available to it.
		</p>
		<p>
            Choosing which stats to invest EVs into is an important part of training a strong pokémon. Consider the hypothetical where you&apos;re training a bulky defensive pokémon like Corsola. If you expect that you won&apos;t be outspeeding most opponents, and that you&apos;ll be doing most of your damage through effects like burn and whirlpool, it would be wasteful to spent EVs in Speed or Attack -- you probably want to maximize the amount of EVs you invest into HP, Defense, or Special Defense.
		</p>
		<p>
            You can gain EVs a number of ways -- by <a href="#items">consuming items</a>, <a href="#jobs">sending your pokémon on specific jobs</a>, or the old-fashioned way, by <a href="#fighting">fighting wild pokémon</a>. If you&apos;ve accidentally overtrained a stat, you can reclaim some of the EVs using specific <a href="#reset">berries</a>.
		</p>
	</div>
);

export default EVs;
