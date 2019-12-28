import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from '@pages/home';
import Calculator from '@pages/calculator';
import Breeding from '@pages/breeding';
import Training from '@pages/training';
import Data from '@pages/data';
import Groups from '@pages/groups';

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
		<Route path="/egg-groups">
			<Groups />
		</Route>
	</Switch>
);

export default Routes;
