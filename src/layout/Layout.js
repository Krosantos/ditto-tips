import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import ScrollToTop from '@shared/ScrollToTop';
import Header from './Header';
import Footer from './Footer';
import Routes from './Routes';
import { wrapper } from './layout.scss';

const Layout = () => (
	<Router>
		<Header />
		<ScrollToTop />
		<div className={wrapper}>
			<Routes />
		</div>
		<Footer />
	</Router>
);

export default Layout;
