import React from 'react';
import Anchor from '@shared/Anchor';
import university from '@images/university.png';
import { section, hammerlocke, wordytable } from './training.scss';

/* eslint-disable react/jsx-no-literals, max-len, react/jsx-one-expression-per-line, react/jsx-max-depth, max-lines-per-function */
const Jobs = () => (
	<div className={section}>
		<Anchor id="jobs" />
		<h2>Jobs</h2>
		<p>
           The cheapest, lowest-effort, but (potentially) most time-consuming way to train EVs is to send your pokémon on specific jobs from the pokécenter PC. The jobs which are &quot;Always Recruiting&quot;, sponsored by Hammerlocke University raise a pokémon&apos;s EVs in lieu of its experience level.
		</p>
		<img alt="" className={hammerlocke} src={university} />
		<p>
            Gains depend on the length of time pokémon are sent to the job, and can be further amplified if a pokémon suffers from <a href="/data#pokerus">pokérus</a>, or is holding the matching <a href="/data#power-items">power item</a>.
		</p>
		<table className={wordytable}>
			<thead>
				<tr>
					<th>Duration (In-Game)</th>
					<th>Time Duration</th>
					<th>EV Gains</th>
					<th>Gains with Power Item</th>
					<th>Gains with Pokérus</th>
					<th>Gains with Both</th>
				</tr>
			</thead>
			<tbody>
				<tr>
					<td>Just a little</td>
					<td>1 Hour</td>
					<td>4</td>
					<td>12</td>
					<td>8</td>
					<td>24</td>
				</tr>
				<tr>
					<td>Very short</td>
					<td>2 Hours</td>
					<td>8</td>
					<td>24</td>
					<td>16</td>
					<td>48</td>
				</tr>
				<tr>
					<td>Short</td>
					<td>3 Hours</td>
					<td>12</td>
					<td>36</td>
					<td>24</td>
					<td>72</td>
				</tr>
				<tr>
					<td>Long</td>
					<td>4 Hours</td>
					<td>16</td>
					<td>48</td>
					<td>32</td>
					<td>96</td>
				</tr>
				<tr>
					<td>Very long</td>
					<td>8 Hours</td>
					<td>32</td>
					<td>96</td>
					<td>64</td>
					<td>192</td>
				</tr>
				<tr>
					<td>Half day</td>
					<td>12 Hours</td>
					<td>48</td>
					<td>144</td>
					<td>96</td>
					<td>288</td>
				</tr>
				<tr>
					<td>Whole day</td>
					<td>24 Hours</td>
					<td>96</td>
					<td>288</td>
					<td>192</td>
					<td>576</td>
				</tr>
			</tbody>
		</table>
	</div>
);

export default Jobs;
