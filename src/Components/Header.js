// import React from 'react';
import { Link, withRouter } from "react-router-dom";
import styled from 'styled-components'


const Header = styled.header`
	background: rgba(255, 255, 255, 0.1);
	position: fixed;
	left: 0;
	top: 0;
	width: 100%;
	box-shadow: 0px 1px 5px 2px rgba(0, 0, 0, 0.8);
`

const List = styled.ul`
  list-style: none;
  display: flex;
  padding: 0;
  width: 100%;
`

const Item = styled.li`
	border-bottom: 3px solid 
		${props => (props.current ? "red" : "transparent")};
	transition: all 0.2s;
	&:hover {
		border-bottom: 3px solid red;
	}
`

const SLink = styled(Link)`
  color: #fff;
	width: 80px;
	height: 50px;
	display: flex;
	justify-content: center;
	align-items: center;
	font-weight: 900;
`

const fn = withRouter(({location: {pathname}}) => {
	return (
    <Header>
      <List>
        <Item current={pathname === '/' ? 1 : 0}><SLink to="/">Home</SLink></Item>
        <Item current={pathname === '/detail' ? 1 : 0}><SLink to="/detail">Detail</SLink></Item>
        <Item current={pathname === '/search' ? 1 : 0}><SLink to="/search">Search</SLink></Item>
        <Item current={pathname === '/tv' ? 1 : 0}><SLink to="/tv">TV</SLink></Item>
      </List>
    </Header>
	);
});

export default fn;