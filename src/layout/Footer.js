import React from 'react';
import { footer } from './layout.scss';

const COPYRIGHT = 'Pokémon © 2002-2020 Pokémon. © 1995-2020 Nintendo/Creatures Inc./GAME FREAK inc. TM, ® and Pokémon character names are trademarks of Nintendo.';

const Footer = () => (
	<div className={footer}>
		{COPYRIGHT}
	</div>
);

export default Footer;
