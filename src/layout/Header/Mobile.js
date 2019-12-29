import React, { useCallback, useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import routes from '@constants/routes';
import '@images/icons/hamburger.png'; // eslint-disable-line import/no-unassigned-import
import {
	header, centerCell, menuButton, mobileMenu, headerLink, mobileGuts,
} from '../layout.scss';

const TITLE = 'Ditto-Tips';

const Menu = ({ open, toggleMenu }) => {
	const containerStyle = useMemo(() => ({
		height: open ? '35vh' : '0px',
	}), [open]);

	return (
		<div className={mobileMenu} style={containerStyle}>
			<div className={mobileGuts}>
				{
					routes.map(({ link, name }) => (
						<Link
							key="name"
							className={headerLink}
							onClick={toggleMenu}
							to={link}
						>
							{name}
						</Link>
					))
				}
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
