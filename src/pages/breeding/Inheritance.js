/* eslint-disable max-lines */
import React from 'react';
import Anchor from '@shared/Anchor';
import destinyknot from '@images/items/destinyknot.png';
import powerband from '@images/items/powerband.png';
import waveincense from '@images/items/waveincense.png';
import meowthg from '@images/mon/meowth_g.png';
import meowthk from '@images/mon/meowth_k.png';
import everstone from '@images/items/everstone.png';
import pokeball from '@images/items/pokeball.png';
import luxuryball from '@images/items/luxuryball.png';
import moonball from '@images/items/moonball.png';
import rookidee from '@images/mon/rookidee.png';
import swinub from '@images/mon/swinub.png';
import {
	section,
	itemcell,
	wordytable,
} from './breeding.scss';

/* eslint-disable react/jsx-no-literals, react/jsx-one-expression-per-line, max-len, react/jsx-max-depth, max-lines-per-function */
const Inheritance = () => (
	<div className={section}>
		<Anchor id="inheritance" />
		<h2>Heritable Traits</h2>
		<p>
            Many of a pokémon&apos;s traits and attributes can be inherited by their children. Frequently, items held by a parent can alter the likelihood of passing one or more traits.
		</p>
		<table className={wordytable}>
			<thead>
				<tr>
					<th>Trait</th>
					<th>Example</th>
					<th>Default Behaviour</th>
					<th>Held Item</th>
					<th>Behaviour with Item</th>
				</tr>
			</thead>
			<tbody>
				<tr>
					<td><a href="/data#species">Species</a></td>
					<td>Remoraid, Blipbug</td>
					<td>Eggs hatch into the least-evolved member of the mother&apos;s evolution family.</td>
					<td>
						<div className={itemcell}>
							<img alt="" src={waveincense} />
							<a href="/data#incense">Incense</a>
						</div>
					</td>
					<td>Some species need to hold incense to produce their baby forms (such as Munchlax, and Mime Jr.)</td>
				</tr>
				<tr>
					<td>Regional Form</td>
					<td>
						<div>
							<img alt="" src={meowthg} />
							<img alt="" src={meowthk} />
						</div>
					</td>
					<td>Pokémon hatch in the local regional form.</td>
					<td>
						<div>
							<img alt="" src={everstone} />
							<a href="/data#everstone">Everstone</a>
						</div>
					</td>
					<td>
                        Pokémon inherit the form of a mother holding an Everstone.
					</td>
				</tr>
				<tr>
					<td><a href="/data#i-vs">IVs</a></td>
					<td>Speed, Attack</td>
					<td>IVs are randomly generated</td>
					<td>
						<div className={itemcell}>
							<img alt="" src={destinyknot} />
							<a href="/data#destiny-knot">Destiny Knot</a>
						</div>
					</td>
					<td>5 out of 6 IVs are chosen from a random parent, the 6th is randomly generated.</td>
				</tr>
				<tr>
					<td>-</td>
					<td>-</td>
					<td>-</td>
					<td>
						<div className={itemcell}>
							<img alt="" src={powerband} />
							<a href="/data#power-items">Power Items</a>
						</div>
					</td>
					<td>The child will always inherit the parent&apos;s IV for the matching item&apos;s stat.</td>
				</tr>
				<tr>
					<td>Ball</td>
					<td>
						<div>
							<img alt="" src={pokeball} />
							<img alt="" src={luxuryball} />
							<img alt="" src={moonball} />
						</div>
					</td>
					<td>Pokémon inherit the mother&apos;s ball. If both parents share a species, children have a 50%/50% chance of inheriting either parent&apos;s ball.</td>
					<td>-</td>
					<td><i>(Note: Master Ball and Cherish Ball are uninheritable, and become pokéballs.)</i></td>
				</tr>
				<tr>
					<td>Egg Moves</td>
					<td>Roost on <img alt="" src={rookidee} /> Rookidee.</td>
					<td>Pokémon can inherit egg moves from either parent.</td>
					<td>-</td>
					<td>Pokémon with an open move slot left in the Nursery with a member of the same species who knows an egg move will learn the egg move.</td>
				</tr>
				<tr>
					<td>Nature</td>
					<td>Bold, Impish, Serious</td>
					<td>Natures are assigned at random.</td>
					<td>
						<div className={itemcell}>
							<img alt="" src={everstone} />
							<a href="/data#everstone">Everstone</a>
						</div>
					</td>
					<td>A pokémon inherits the nature of a parent holding an Everstone.</td>
				</tr>
				<tr>
					<td><a href="/data#ability">Ability</a></td>
					<td>Levitate, Prankster, Swift Swim</td>
					<td>A mother has an 80% chance of passing her Ability to her children. Otherwise, they receive their species&apos; other ability, if any.</td>
					<td>-</td>
					<td>-</td>
				</tr>
				<tr>
					<td><a href="/data#hidden-ability">Hidden Ability</a></td>
					<td>Thick Fat on <img alt="" src={swinub} />Swinub</td>
					<td>A mother has a 60% chance of passing her Hidden Ability to her children. Otherwise, they have a 20% chance of receiving either of their species&apos; normal abilities.</td>
					<td>-</td>
					<td>-</td>
				</tr>
				<tr>
					<td>Shininess</td>
					<td>Red Gyarados</td>
					<td>Shininess is not heritable.</td>
					<td>-</td>
					<td>-</td>
				</tr>
				<tr>
					<td>Gigantimax</td>
					<td>G-Max Alcremie</td>
					<td>The ability to Gigantimax is not heritable.</td>
					<td>-</td>
					<td>-</td>
				</tr>
			</tbody>
		</table>
	</div>
);

export default Inheritance;
