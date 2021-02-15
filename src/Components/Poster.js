import React from 'react';
import styled from 'styled-components'
import noPoster from "../assets/noPosterSmall.png";
import { Link } from "react-router-dom";


const SLink = styled(Link)`
	color: #fff;
`

const ImageContainer = styled.div`
	background: #dbdbdb;
	border-radius: 4px;
	overflow: hidden;
	position: relative;
	padding-bottom: 120%;
	& > img {
		position: absolute;
		left: 0;
		top: 0;
		width: 100%;
		height: 100%;
	}
`

const Rating = styled.div`
	position: absolute;
	left: 0;
	top: 0;
	width: 100%;
	height: 100%;
	background: rgba(0, 0, 0, 0.7);
	color: red;
	font-weight: 900;
	display: flex;
	justify-content: center;
	align-items: center;
	font-size: 22px;
	box-shadow: 0 0 0 1px red inset; 
	border-radius: 4px;
	opacity: 0;
	transition: opacity 0.1s;
	-ms-user-select: none; 
	-moz-user-select: -moz-none;
	-khtml-user-select: none;
	-webkit-user-select: none;
	user-select: none;
	&:hover {
		opacity: 1;
  }
`
const Title = styled.div`
	font-size: 14px;
	padding: 7px 5px 5px;
	font-weight: 700;
	white-space: nowrap;
	text-overflow: ellipsis;
	overflow: hidden;
	width: 100%;
`
const Year = styled.div`
	color: gray;
	font-weight: 400;
	font-size: 12px;
	padding: 0 5px;
`


const Poster = ({id, title, image, rating, year, isShow = false}) => {
	let image_url = `https://image.tmdb.org/t/p/w200${image}`;
	if(!image) image_url = noPoster;

	let link = `/movie/${id}`; 
	if(isShow) link = `/tv/${id}`; 

  return (
    <SLink to={link}>
      <ImageContainer>
        <img src={image_url} alt={title} />
        <Rating>★ {rating}</Rating>
      </ImageContainer>
      <Title>{title}</Title>
      <Year>{year}</Year>
    </SLink>
  )
}

export default Poster;