import React from 'react';
import Anchor from '@shared/Anchor';
import ditto from '@images/mon/ditto.png';
import sinistea from '@images/mon/sinistea.png';
import rotom from '@images/mon/rotom.png';
import impidimp from '@images/mon/impidimp.png';
import goomy from '@images/mon/goomy.png';
import { section } from './breeding.scss';

/* eslint-disable react/jsx-no-literals, react/jsx-one-expression-per-line, max-len, react/jsx-max-depth, max-lines-per-function */
const Ditto = () => (
	<div className={section}>
		<Anchor id="ditto" />
		<h2>Ditto</h2>
		<p>
			<img alt="" src={ditto} /> <a href="/data#ditto">Ditto</a> is an incredibly useful, important tool in a breeder&apos;s arsenal. ANY pokémon left in the Nursery with Ditto is treated as female. That means that any pokémon capable off reproducing can breed with Ditto.
		</p>
		<p>
			Ditto is the only way to breed with pokémon that are genderless (such as <img alt="" src={sinistea} /> Sinistea or <img alt="" src={rotom} /> Rotom), or exclusively male (like <img alt="" src={impidimp} /> Impidimp).
		</p>
		<p>
			Frequently, this is the only way to ensure you can pass along beneficial traits that would otherwise be locked by gender. For example, if the only <img alt="" src={goomy} /> Goomy you have with Gooey, the species&apos; Hidden Ability is male, you have no way to pass it to children (since only a mother can pass abilities). Ditto allows you to breed with the male Goomy until you get a female Goomy with the Hidden Ability, allowing you to continue breeding for yet more attributes.
		</p>
		<p>This makes Ditto with good IVs especially valuable. A Ditto with 6 perfect IVs massively accelerates breeding -- children of any gender can be repeatedly bred with Ditto, accumulating more and more perfect IVs with each generation, until arriving at the intended 5/6 IV individual.</p>
	</div>
);

export default Ditto;
