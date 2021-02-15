import Loader from 'Components/Loader';
import React from 'react';
import styled from 'styled-components'

const Container = styled.div`

`

const BgImg = styled.div`
	width: 100%;
	height: 100%;
	position: fixed;
	left: 0;
	top: 0;
	z-index: 0;
	opacity: 0.2;
	${props => {
		if (props.bgImg) {
			return `
				background: url('https://image.tmdb.org/t/p/original${props.bgImg}') no-repeat center center;
				background-size: cover;
			`;
		} else {
			return `
				background: none;
			`;
		}
	}}
`

const Contents = styled.div`
	width: 100%;
	height: 100%;
	position: fixed;
	left: 0;
	top: 0;
	z-index: 1;
	padding: 65px 10px 30px;
`


const DetailPresenter = ({loading, result}) => {
	return (
		<>
		{loading ? (
			<Loader />
		): (
			<Container>
				<BgImg bgImg={result.backdrop_path}></BgImg>
				<Contents>
					"asdaads"
				</Contents>
			</Container>
		)}
		</>
	)
}

export default DetailPresenter;