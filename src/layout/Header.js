import React from 'react';
import { Link } from 'react-router-dom';
import '@images/wave.png'; // eslint-disable-line import/no-unassigned-import
import { header, link, cell } from './Layout.scss';

const CALCULATOR = 'Calculator';
const BREEDING = 'Breeding Guide';
const TRAINING = 'Training Guide';
const DATA = 'Data Tables';

const Header = () => (
	<div className={header}>
		<div className={cell}>
			Ditto-Tips
		</div>
		<Link className={link}>{CALCULATOR}</Link>
		<Link className={link}>{BREEDING}</Link>
		<Link className={link}>{TRAINING}</Link>
		<Link className={link}>{DATA}</Link>
	</div>
);

export default Header;
