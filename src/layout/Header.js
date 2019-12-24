import React from 'react';
import { Link } from 'react-router-dom';
import '@images/wave.png'; // eslint-disable-line import/no-unassigned-import
import { header, link, cell } from './Layout.scss';

const TITLE = 'Ditto-Tips';
const CALCULATOR = 'Calculator';
const BREEDING = 'Breeding Guide';
const TRAINING = 'Training Guide';
const DATA = 'Data Tables';

const Header = () => (
	<div className={header}>
		<Link className={cell} to="/">{TITLE}</Link>
		<Link className={link} to="/calculator">{CALCULATOR}</Link>
		<Link className={link} to="/breeding">{BREEDING}</Link>
		<Link className={link} to="/training">{TRAINING}</Link>
		<Link className={link} to="/data">{DATA}</Link>
	</div>
);

export default Header;
