import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
	Route,
	Redirect
} from "react-router-dom";
import Home from "Routes/Home";
import Detail from "Routes/Detail";
import Search from "Routes/Search";
import TV from "Routes/TV";
import Navigation from 'Components/Navigation';

export default () => {
	return (
		<Router>
			<Navigation />
			<Switch>
				<Route exact path="/">
					<Home />
				</Route>
				<Route path="/detail">
					<Detail />
				</Route>
				<Route path="/search">
					<Search />
				</Route>
				<Route path="/tv">
					<TV />
				</Route>
				<Redirect from="*" to="/" />
			</Switch>
		</Router>
	)
}