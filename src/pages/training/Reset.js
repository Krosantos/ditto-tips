import React from 'react';
import Anchor from '@shared/Anchor';
import pomegberry from '@images/items/pomegberry.png';
import kelpsyberry from '@images/items/kelpsyberry.png';
import qualotberry from '@images/items/qualotberry.png';
import hondewberry from '@images/items/hondewberry.png';
import grepaberry from '@images/items/grepaberry.png';
import tamatoberry from '@images/items/tamatoberry.png';
import { section, itemcell } from './training.scss';

/* eslint-disable react/jsx-no-literals, max-len, react/jsx-one-expression-per-line, react/jsx-max-depth, max-lines-per-function */
const Reset = () => (
	<div className={section}>
		<Anchor id="reset" />
		<h2>Reset</h2>
		<p>
           If you&apos;ve accidentally over-trained a certain EV, you can remove points, (which frees them up to be allocated elsewhere), by feeding pokémon stat-lowering berries. These have the added benefit of making a pokémon friendlier, and can be found by shaking trees in the Wild Area.
		</p>
		<table>
			<thead>
				<tr>
					<th>Berry</th>
					<th>Stat</th>
				</tr>
			</thead>
			<tbody>
				<tr>
					<td>HP</td>
					<td>
						<div className={itemcell}>
							<img alt="" src={pomegberry} />Pomeg Berry
						</div>
					</td>
				</tr>
				<tr>
					<td>Attack</td>
					<td>
						<div className={itemcell}>
							<img alt="" src={kelpsyberry} />Kelpsy Berry
						</div>
					</td>
				</tr>
				<tr>
					<td>Defense</td>
					<td>
						<div className={itemcell}>
							<img alt="" src={qualotberry} />Qualot Berry
						</div>
					</td>
				</tr>
				<tr>
					<td>Special Attack</td>
					<td>
						<div className={itemcell}>
							<img alt="" src={hondewberry} />Hondew Berry
						</div>
					</td>
				</tr>
				<tr>
					<td>Special Defense</td>
					<td>
						<div className={itemcell}>
							<img alt="" src={grepaberry} />Grepa Berry
						</div>
					</td>
				</tr>
				<tr>
					<td>Speed</td>
					<td>
						<div className={itemcell}>
							<img alt="" src={tamatoberry} />Tamato Berry
						</div>
					</td>
				</tr>
			</tbody>
		</table>
	</div>
);

export default Reset;
