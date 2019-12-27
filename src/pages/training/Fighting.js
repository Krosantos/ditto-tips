import React from 'react';
import Anchor from '@shared/Anchor';
import skwovet from '@images/mon/skwovet.png';
import stufful from '@images/mon/stufful.png';
import yamask from '@images/mon/yamask_g.png';
import perrserker from '@images/mon/perrserker.png';
import weezing from '@images/mon/weezing.png';
import snom from '@images/mon/snom.png';
import gossifleur from '@images/mon/gossifleur.png';
import arrokuda from '@images/mon/arrokuda.png';
import mrmime from '@images/mon/mrmime_g.png';
import { section } from './training.scss';

/* eslint-disable react/jsx-no-literals, max-len, react/jsx-one-expression-per-line, react/jsx-max-depth, max-lines-per-function */
const Fighting = () => (
	<div className={section}>
		<Anchor id="fighting" />
		<h2>Fighting</h2>
		<p>
            The most straightforward, traditional way to gain EVs is to defeat enemy pokémon. When made to faint, each species grants a consistent number of EVs to any pokémon who gained experience from its defeat. Therefore, you can EV train by seeking out specific species, and knocking them out.
		</p>
		<p>
            Keep in mind that any pokémon that receives experience will receive EVs -- if you don&apos;t want to inadvertently invest EVs, put all pokémon except the intended trainee, and any strong fighters, back in the box. Also remember to run away from any species who don&apos;t grant the EV you&apos;re looking for.
		</p>
		<p>
            Below are some easy locations to train specific EVs. The noted pokémon, with the exception of Gossifleur, should appear at least 35% of the time in the overworld, regardless of weather.
		</p>
		<table>
			<thead>
				<tr>
					<th>Stat</th>
					<th>Species</th>
					<th>Points</th>
					<th>Location</th>
				</tr>
			</thead>
			<tbody>
				<tr>
					<td>HP</td>
					<td><img alt="" src={skwovet} /> Skwovet</td>
					<td>1</td>
					<td>Route 1</td>
				</tr>
				<tr>
					<td>Attack</td>
					<td><img alt="" src={stufful} /> Stufful</td>
					<td>1</td>
					<td>Route 5</td>
				</tr>
				<tr>
					<td>Attack</td>
					<td><img alt="" src={perrserker} /> Perrserker</td>
					<td>2</td>
					<td>Route 9 -- Outer Spikemuth</td>
				</tr>
				<tr>
					<td>Defense</td>
					<td><img alt="" src={yamask} /> Yamask</td>
					<td>1</td>
					<td>Route 6</td>
				</tr>
				<tr>
					<td>Defense</td>
					<td><img alt="" src={weezing} /> Weezing</td>
					<td>2</td>
					<td>Slumbering Weald</td>
				</tr>
				<tr>
					<td>Special Attack</td>
					<td><img alt="" src={snom} /> Snom</td>
					<td>1</td>
					<td>Route 8 -- Steamdrift Way</td>
				</tr>
				<tr>
					<td>Special Defense</td>
					<td><img alt="" src={gossifleur} /> Gossifleur</td>
					<td>1</td>
					<td>Route 3</td>
				</tr>
				<tr>
					<td>Speed</td>
					<td><img alt="" src={arrokuda} /> Arrokuda</td>
					<td>1</td>
					<td>Route 2 -- Lake</td>
				</tr>
				<tr>
					<td>Speed</td>
					<td><img alt="" src={mrmime} /> Mr. Mime</td>
					<td>2</td>
					<td>Route 10</td>
				</tr>
			</tbody>
		</table>
	</div>
);

export default Fighting;
