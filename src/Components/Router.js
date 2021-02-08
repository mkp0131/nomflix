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
				<Route exact path="/" component={Home} />
				<Route path="/movie/:id" component={Detail} />
				<Route path="/tv/:id" component={Detail} />
				<Route path="/search" component={Search} />
				<Route path="/tv" component={TV} />
				<Redirect from="*" to="/" />
			</Switch>
		</Router>
	)
}

export default fn;