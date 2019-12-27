import React from 'react';
import Anchor from '@shared/Anchor';
import { section } from './breeding.scss';

/* eslint-disable react/jsx-no-literals, react/jsx-one-expression-per-line, max-len, react/jsx-max-depth, max-lines-per-function */
const Compatibility = () => (
	<div className={section}>
		<Anchor id="compatibility" />
		<h2>Compatibility</h2>
		<p>
            For two pokémon to produce an egg, they must be genetically compatible. To be compatible, two pokémon must be Male and Female. They must also belong to the same <a href="/data#egg-group">Egg Group</a>, a collection of pokémon capable of breeding with one another. You can find a list of these groups <a href="/egg-groups">here</a>.
		</p>
		<p>
			Every 256 steps you take, pokémon left in the Nursery have a chance of producing an egg. This chance is dependent on the pokémon left behind. Pokémon generally prefer to breed with their own species, and with indivduals originally owned by another trainer. <i>(It&apos;s easier to seduce someone when your parents aren&apos;t around.)</i> You can increase this chance if you own the <a href="/data#oval-charm">Oval Charm</a>.
		</p>
		<table>
			<thead>
				<tr>
					<th>Species</th>
					<th>Owner</th>
					<th>Chance</th>
					<th>Chance with Oval Charm</th>
				</tr>
			</thead>
			<tbody>
				<tr>
					<td>Different</td>
					<td>Same</td>
					<td>20%</td>
					<td>40%</td>
				</tr>
				<tr>
					<td>Same</td>
					<td>Same</td>
					<td>50%</td>
					<td>80%</td>
				</tr>
				<tr>
					<td>Different</td>
					<td>Different</td>
					<td>50%</td>
					<td>80%</td>
				</tr>
				<tr>
					<td>Same</td>
					<td>Different</td>
					<td>70%</td>
					<td>88%</td>
				</tr>
			</tbody>
		</table>
	</div>
);

export default Compatibility;
