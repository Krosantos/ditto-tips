import React from 'react';
import { Link } from 'react-router-dom';
import { header, link, cell } from '../layout.scss';

const TITLE = 'Ditto-Tips';
const CALCULATOR = 'Egg Calculator';
const BREEDING = 'Breeding Guide';
const TRAINING = 'Training Guide';
const DATA = 'Glossary/Appendix';

const Desktop = () => (
	<div className={header}>
		<Link className={cell} to="/">{TITLE}</Link>
		<Link className={link} to="/calculator">{CALCULATOR}</Link>
		<Link className={link} to="/breeding">{BREEDING}</Link>
		<Link className={link} to="/training">{TRAINING}</Link>
		<Link className={link} to="/data">{DATA}</Link>
	</div>
);

export default Desktop;
