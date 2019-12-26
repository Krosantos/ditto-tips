import React, { useCallback, useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import '@images/icons/hamburger.png'; // eslint-disable-line import/no-unassigned-import
import {
	header, centerCell, menuButton, mobileMenu, link, mobileGuts,
} from '../layout.scss';

const TITLE = 'Ditto-Tips';
const CALCULATOR = 'Egg Calculator';
const BREEDING = 'Breeding Guide';
const TRAINING = 'Training Guide';
const DATA = 'Glossary/Appendix';

const Menu = ({ open, toggleMenu }) => {
	const containerStyle = useMemo(() => ({
		height: open ? '33vh' : '0px',
	}), [open]);

	return (
		<div className={mobileMenu} style={containerStyle}>
			<div className={mobileGuts}>
				<Link className={link} onClick={toggleMenu} to="/calculator">{CALCULATOR}</Link>
				<Link className={link} onClick={toggleMenu} to="/breeding">{BREEDING}</Link>
				<Link className={link} onClick={toggleMenu} to="/training">{TRAINING}</Link>
				<Link className={link} onClick={toggleMenu} to="/data">{DATA}</Link>
			</div>
		</div>
	);
};

const Mobile = () => {
	const [menuOpen, setMenuOpen] = useState(false);
	const toggleMenu = useCallback(() => setMenuOpen(!menuOpen), [menuOpen]);

	return (
		<div className={header}>
			<button className={menuButton} onClick={toggleMenu} type="button" />
			<Menu open={menuOpen} toggleMenu={toggleMenu} />
			<Link className={centerCell} to="/">{TITLE}</Link>
		</div>
	);
};

export default Mobile;
