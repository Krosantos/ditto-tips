import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from '@pages/home';
import Calculator from '@pages/calculator';
import Breeding from '@pages/breeding';
import Training from '@pages/training';
import Data from '@pages/data';

const Routes = () => (
	<Switch>
		<Route exact path="/">
			<Home />
		</Route>
		<Route path="/calculator">
			<Calculator />
		</Route>
		<Route path="/breeding">
			<Breeding />
		</Route>
		<Route path="/training">
			<Training />
		</Route>
		<Route path="/data">
			<Data />
		</Route>
	</Switch>
);

export default Routes;
