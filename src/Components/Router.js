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
import Header from 'Components/Header';

const fn = () => {
	return (
		<Router>
			<Header />
			<Switch>
				<Route exact path="/">
					<Home />
				</Route>
				<Route path="/movie/:id">
					<Detail />
				</Route>
				<Route path="/tv/:id">
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

export default fn;