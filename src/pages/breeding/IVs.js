import React from 'react';
import Anchor from '@shared/Anchor';
import barraskewda from '@images/mon/barraskewda.png';
import { section } from './breeding.scss';

/* eslint-disable react/jsx-no-literals, react/jsx-one-expression-per-line, max-len */
const IVs = () => (
	<div className={section}>
		<Anchor id="i-vs" />
		<h2>IVs</h2>
		<p>
            IVs, or Individual Values, are what determine a pokémon&apos;s base proficiency in each of the 6 stats, before any training comes into play. You can think of them as a pokémon&apos;s genes -- heritable by children, and impossible to change. Each IV is a random number, ranging from 0 to 31.
		</p>
		<p>You can get a sense of a pokémon&apos;s IVs using the IV Judge -- a feature which unlocks once you&apos;ve cleared the Battle Tower at least once. While viewing your boxes, you can use it to roughly gauge a pokémon&apos;s IVs. Usually, you&apos;ll only care about two values: &quot;No Good&quot; which indicates an IV of 0 for that stat, and &quot;Best&quot; which indicates a 31.</p>
		<p>
			Getting perfect, 31 IVs is frequently one of the main goals of breeding pokémon. Using the <a href="/data#power-items">Power Items</a> and <a href="/data#destiny-knot">Destiny Knot</a> you can ensure that specific stats&apos; IVs are passed from parent to child, slowly accumulating stronger and stronger individuals, until you finally hatch a pokémon with 5 or 6 perfect IVs.
		</p>
		<p>
			Because the Destiny Knot will pass at most 5 IVs to a child, it&apos;s commonplace to choose one stat per pokémon to let generate randomly. Frequently, this is done while min-maxing for that pokémon&apos;s intended role. A <img alt="" src={barraskewda} /> Barraswekda who will only ever be taught physical moves doesn&apos;t really care about having a perfect Special Attack stat.
		</p>
		<p>
			In the event that a pokémon cannot be bred (maybe it&apos;s legendary, or a fossil) or you don&apos;t want to expend the effort of breeding, it&apos;s possible to use <a href="/data#bottlecaps">Bottlecaps</a> to Hyper Train a level 100 pokémon. The game will treat a Hyper Trained stat as having a base IV of 31 for all purposes <i>except</i> breeding. The true, underlying IV will be used when generating values for any children.
		</p>
	</div>
);

export default IVs;
