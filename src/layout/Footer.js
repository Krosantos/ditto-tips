import React from 'react';
import { footer } from './layout.scss';

const COPYRIGHT = 'Pokémon © 2002-2020 Pokémon. © 1995-2020 Nintendo/Creatures Inc./GAME FREAK inc. TM, ® and Pokémon character names are trademarks of Nintendo. ';
const I_AM_AN_AUTHOR = 'The rest of the site was made by Tymko.';

const Footer = () => (
	<div className={footer}>
		{COPYRIGHT}
		{I_AM_AN_AUTHOR}
	</div>
);

export default Footer;
