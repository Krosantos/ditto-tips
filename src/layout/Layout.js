import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Header from './Header';

const Layout = () => (
	<Router>
		<Header />
	</Router>
);

export default Layout;
