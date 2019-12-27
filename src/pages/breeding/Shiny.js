import React from 'react';
import Anchor from '@shared/Anchor';
import shinySableye from '@images/shinySableye.png';
import notShinySableye from '@images/notShinySableye.png';
import { section, shinyDisplay } from './breeding.scss';

/* eslint-disable react/jsx-no-literals, react/jsx-one-expression-per-line, max-len, react/jsx-max-depth */
const Shiny = () => (
	<div className={section}>
		<Anchor id="shiny" />
		<h2>Shininess</h2>
		<p>
            Although it has absolutely no impact on a pokémon&apos;s ability to fight, for many people, the main reason to breed pokémon is in hunt of an indivdual who is Shiny, or differently colored than most species counterparts.
		</p>
		<div className={shinyDisplay}>
			<div>
				<img alt="" src={notShinySableye} />
				<img alt="" src={shinySableye} />
			</div>
			<span>Sableye, in typical, and shiny colors.</span>
		</div>
		<p>
            By default, any pokémon, whether hatched or encountered in the wild, has a 1 in 4096 of being shiny. For breeding purposes, two factors can increase this -- owning the <a href="/data#shiny-charm">Shiny Charm</a>, or breeding two pokémon from different linguistic regions (e.g., Korea and France). Linguistic region is represented by the 3-letter language code in a pokémon&apos;s summary, and is determined on the basis of the selected language when the game is started.
		</p>
		<table>
			<thead>
				<tr>
					<th>Combination</th>
					<th>Shiny Chance</th>
					<th>Chance with Charm</th>
				</tr>
			</thead>
			<tbody>
				<tr>
					<td>Same Region</td>
					<td>1 in 4096</td>
					<td>1 in 2048</td>
				</tr>
				<tr>
					<td>Diffent Region</td>
					<td>1 in 682.7</td>
					<td>1 in 512</td>
				</tr>
			</tbody>
		</table>
	</div>
);

export default Shiny;
