import React from 'react';
import '@images/wave.png'; // eslint-disable-line import/no-unassigned-import
import { useMediaQuery } from 'react-responsive';
import Desktop from './Desktop';
import Mobile from './Mobile';

const Header = () => {
	const isMobile = useMediaQuery({ query: '(max-width : 767px)' });

	if (isMobile)
		return (<Mobile />);
	return (<Desktop />);
};

export default Header;
