import React from 'react';
import Anchor from '@shared/Anchor';
import snorlax from '@images/mon/snorlax.png';
import avalugg from '@images/mon/avalugg.png';
import destinyknot from '@images/items/destinyknot.png';
import everstone from '@images/items/everstone.png';
import { section, itemcell } from '../breeding.scss';

/* eslint-disable react/jsx-no-literals, react/jsx-one-expression-per-line, max-len, react/jsx-max-depth, max-lines-per-function */
const Snorlax = () => (
	<div className={section}>
		<Anchor id="snorlax" />
		<h2>Snorlax</h2>
		<p>
            We&apos;re ready to make our first semi-competetive pokémon. Our goal is to come up with a <img alt="" src={snorlax} /> Snorlax. It&apos;s gonna use the moves Curse (an egg move) and Recycle to get strong and bulky, while continously healing itself. It won&apos;t learn any Special moves, so we&apos;ll give it the Adamant nature, and aim to hatch an individual with perfect IVs in every stat except Special Attack. We want it to have the Hidden Ability Gluttony, which will help ensure it uses its berries promptly.
		</p>
		<p>
			We&apos;ve caught a few Snorlax in raids -- they show up a <i>lot</i>. Using the IV judge, we identify an initial breeding pair:
		</p>
		<table>
			<thead>
				<tr>
					<th>Value</th>
					<th>
						<div className={itemcell}>
							<img alt="" src={snorlax} />
							Mom ♀
						</div>
					</th>
					<th>
						<div className={itemcell}>
							<img alt="" src={snorlax} />
							Dad ♂
						</div>
					</th>
				</tr>
			</thead>
			<tbody>
				<tr>
					<td>HP</td>
					<td>Best</td>
					<td>Decent</td>
				</tr>
				<tr>
					<td>Attack</td>
					<td>Fantastic</td>
					<td>Best</td>
				</tr>
				<tr>
					<td>Defense</td>
					<td>Best</td>
					<td>Best</td>
				</tr>
				<tr>
					<td>Sp. Atk</td>
					<td>Pretty Good</td>
					<td>Best</td>
				</tr>
				<tr>
					<td>Sp. Def</td>
					<td>Best</td>
					<td>Best</td>
				</tr>
				<tr>
					<td>Speed</td>
					<td>Best</td>
					<td>Decent</td>
				</tr>
				<tr>
					<td>Nature</td>
					<td>Bold</td>
					<td>Admant</td>
				</tr>
				<tr>
					<td>Ability</td>
					<td>Gluttony</td>
					<td>Immunity</td>
				</tr>
			</tbody>
		</table>
		<p>
			Because they were caught in 5-star raids, both parents have multiple &quot;Best&quot;-rated IVs, (which means that those stats have a perfect value of 31). We got lucky -- dad has the Adamant Nature we want, and mom has the Gluttony hidden ability. We&apos;ve decided that we&apos;ll worry about the egg move (Curse) later -- right now, we&apos;re going to focus on getting a Snorlax with 5IVs, Adamant, and Gluttony.
		</p>
		<p>
			Because we want to hold onto IVs from both parents, and because we want to hold onto dad&apos;s nature, we&apos;ll have mom hold a <img alt="" src={destinyknot} /> Destiny Knot, and dad hold an <img alt="" src={everstone} /> Everstone. We drop our parents off in the Nursery.
		</p>
		<p>
			As eggs begin to emerge from the Nursery, we hatch them, hoping that one of the resulting babies has all the attributes we&apos;re looking for. In practice, we have a 1 in 1 chance of passing on the Adamant nature (dad&apos;s Everstone is a guarantee), a 3 in 5 chance of passing on Gluttony (as a hidden ability, it&apos;s less likely to be inherited), and a 1 in 48 chance of our baby having the desired 5IVs. (We have a 1 in 6 chance of Sp. Atk being chosen as the uninherited stat, and a 1 in 2 chance of inheriting the &quot;Best&quot;-rated Attack from dad, and HP and Speed from mom.) Together, that represents 1 in 80 odds, or a 1.25% chance of any child being what we want.
		</p>
		<p>
			Those are rough odds -- if we hatched two boxes worth of Snorlax, we would only have a ~53% chance to have gotten the result we want. Luckily for us, there are <i>incremental steps</i> we can take that will get us closer to our desired result.
		</p>
		<p>
			Consider this: dad&apos;s perfect Sp. Atk stat doesn&apos;t really matter to our end goal, and males can&apos;t pass down abilities. If we ever hatch a male Snorlax with 4 perfect, desired IVs, we can swap him in for dad. Each IV we gain <i>doubles</i> our odds of hatching the desired egg (since that&apos;s one IV fewer we have to roll the dice on when calculating Destiny Knot inheritance). At 1 in 40 odds, hatching two boxes worth of Snorlax eggs yields a 78% chance of the desired result.
		</p>
		<p>
			Once we have a genetically fit child, we have to concern ourselves with teaching it Curse. Because it can only learn Curse as an egg move, and because neither parent knew Curse, we need to produce a peer Snorlax to teach the move. We&apos;ll hold onto mom from earlier, and have her breed with a male <img alt="" src={avalugg} /> Avalugg. Both Snorlax and Avalugg are in the &quot;Monster&quot; <a href="/data#egg-group">egg group</a>, so they&apos;re capable of producing offspring. If Avalugg knows Curse, any children we hatch will be Snorlax who know Curse.
		</p>
		<p>
			Once we hatch a single egg, we can leave the Curse Snorlax in the Nursery briefly with our gentically-optimal Snorlax. When we remove them both, optimal Snorlax will know Curse, and is now ready to be EV-trained, and put into service as a competetive pokémon.
		</p>
	</div>
);

export default Snorlax;
