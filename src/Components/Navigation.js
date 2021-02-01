// import React from 'react';
import { Link } from "react-router-dom";

export default () => {
	return (
		<>
			<Link to="/">Home</Link>
			<Link to="/detail">Detail</Link>
			<Link to="/search">Search</Link>
			<Link to="/tv">TV</Link>
		</>
	);
}