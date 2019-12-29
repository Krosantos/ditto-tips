import React from 'react';
import { Link } from 'react-router-dom';
import routes from '@constants/routes';
import { header, headerLink, cell } from '../layout.scss';

const TITLE = 'Ditto-Tips';
const Desktop = () => (
	<div className={header}>
		<Link className={cell} to="/">{TITLE}</Link>
		{
			routes.map(({ link, name }) => (
				<Link key={name} className={headerLink} to={link}>{name}</Link>
			))
		}
	</div>
);

export default Desktop;
