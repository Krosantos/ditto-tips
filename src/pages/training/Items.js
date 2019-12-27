import React from 'react';
import Anchor from '@shared/Anchor';
import hpup from '@images/items/hpup.png';
import protein from '@images/items/protein.png';
import iron from '@images/items/iron.png';
import calcium from '@images/items/calcium.png';
import zinc from '@images/items/zinc.png';
import carbos from '@images/items/carbos.png';
import healthfeather from '@images/items/healthfeather.png';
import musclefeather from '@images/items/musclefeather.png';
import resistfeather from '@images/items/resistfeather.png';
import geniusfeather from '@images/items/geniusfeather.png';
import cleverfeather from '@images/items/cleverfeather.png';
import swiftfeather from '@images/items/swiftfeather.png';
import { section, itemcell } from './training.scss';

/* eslint-disable react/jsx-no-literals, max-len, react/jsx-one-expression-per-line, react/jsx-max-depth, max-lines-per-function */
const Items = () => (
	<div className={section}>
		<Anchor id="items" />
		<h2>Items</h2>
		<p>
            The easiest, if most expensive, way to train EVs is to consume items. For each of the six stats, you can feed your pokémon vitamins to raise its matching EV by 10, or give it a feather, to raise it by 1.
		</p>
		<p>
            Vitamins can be purchased from the BP saleswoman in the middle Hammerlocke pokécenter for 2BP each, or from the pokécenter on Wyndon&apos;s main circle for 10,000 dollars.
		</p>
		<p>
            Feathers cannot be purchases, but can be picked up off the ground on the bridge on Route 5. If you hatch eggs in the nearby nursery, you&apos;ll have ample opportunities to pick some up.
		</p>
		<table>
			<thead>
				<tr>
					<th>Stat</th>
					<th>Vitamin</th>
					<th>Feather</th>
				</tr>
			</thead>
			<tbody>
				<tr>
					<td>HP</td>
					<td>
						<div className={itemcell}>
							<img alt="" src={hpup} />HP UP
						</div>
					</td>
					<td>
						<div className={itemcell}>
							<img alt="" src={healthfeather} />Health Feather
						</div>
					</td>
				</tr>
				<tr>
					<td>Attack</td>
					<td>
						<div className={itemcell}>
							<img alt="" src={protein} />Protein
						</div>
					</td>
					<td>
						<div className={itemcell}>
							<img alt="" src={musclefeather} />Muscle Feather
						</div>
					</td>
				</tr>
				<tr>
					<td>Defense</td>
					<td>
						<div className={itemcell}>
							<img alt="" src={iron} />Iron
						</div>
					</td>
					<td>
						<div className={itemcell}>
							<img alt="" src={resistfeather} />Resist Feather
						</div>
					</td>
				</tr>
				<tr>
					<td>Special Attack</td>
					<td>
						<div className={itemcell}>
							<img alt="" src={calcium} />Calcium
						</div>
					</td>
					<td>
						<div className={itemcell}>
							<img alt="" src={geniusfeather} />Genius Feather
						</div>
					</td>
				</tr>
				<tr>
					<td>Special Defense</td>
					<td>
						<div className={itemcell}>
							<img alt="" src={zinc} />Zinc
						</div>
					</td>
					<td>
						<div className={itemcell}>
							<img alt="" src={cleverfeather} />Clever Feather
						</div>
					</td>
				</tr>
				<tr>
					<td>Speed</td>
					<td>
						<div className={itemcell}>
							<img alt="" src={carbos} />Carbos
						</div>
					</td>
					<td>
						<div className={itemcell}>
							<img alt="" src={swiftfeather} />Swift Feather
						</div>
					</td>
				</tr>
			</tbody>
		</table>
	</div>
);

export default Items;
