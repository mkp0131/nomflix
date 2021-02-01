// import React from 'react';
import { Link } from "react-router-dom";
import styled from 'styled-components'

const List = styled.ul`
  list-style: none;
  display: flex;
  padding: 0;
  width: 100%;
`
const SLink = styled(Link)`
  color: red;
  padding: 10px 20px;
  display: block;
  &:hover {
    background: blue;
  }
`

const fn = () => {
	return (
    <header>
      <List>
        <li><SLink to="/">Home</SLink></li>
        <li><SLink to="/detail">Detail</SLink></li>
        <li><SLink to="/search">Search</SLink></li>
        <li><SLink to="/tv">TV</SLink></li>
      </List>
    </header>
	);
}

export default fn;