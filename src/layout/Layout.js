import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Header from './Header';
import Routes from './Routes';
import { wrapper } from './layout.scss';

const Layout = () => (
	<Router>
		<Header />
		<div className={wrapper}>
			<Routes />
		</div>
	</Router>
);

export default Layout;
