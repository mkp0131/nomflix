import Loader from 'Components/Loader';
import Message from 'Components/Message';
import React from 'react';
import styled, {keyframes} from 'styled-components'
import noPoster from "assets/noPosterSmall.png";
import Helmet from "react-helmet";

const boxFade = keyframes`
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
`

const Container = styled.div`
  opacity: 0;
  animation: ${boxFade} 0.5s cubic-bezier(.9,.03,.69,.22);
  animation-fill-mode: forwards;
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
  display: flex;
  justify-content: center;
  align-items: center;
  animation
`

const Grid = styled.div`
  display: grid;
  grid-template-columns: 30% 70%;
`

const Left = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`
const Right = styled.div`
  padding: 0 2em;
`
const Img = styled.div`
  border-radius: 10px;
  overflow: hidden;
  & > img {
    width: 100%;
		height: 100%;
  }
`
const Title = styled.div`
  font-size: 32px;
  font-weight: 900;
  margin-bottom: 10px;
  color: red;
`
const Info = styled.div`
  margin-bottom: 40px;
  & > span {
    margin-right: 20px;
    position: relative;
  }
  & > span:before {
    content: '';
    position: absolute;
    right: -10px;
    top: 45%;
    width: 1px;
    height: 60%;
    background: #fff;
    transform: translateY(-50%);
  }
  & > span:last-child {
    margin-right: 0;
  }
  & > span:last-child:before {
    display: none;
  } 
`
const Description = styled.div`
  font-size: 18px;
  line-height: 1.4;
`


const DetailPresenter = ({loading, result, isMovie, error}) => {
  let image_url;
  let year;
  let title = '';
  let runtime;
  let genres;
  let overview;
  let bg_img;

  if(result) {
    bg_img = result.backdrop_path && result.backdrop_path;
    image_url = result.poster_path ? `https://image.tmdb.org/t/p/original${result.poster_path}` : noPoster;
    year = isMovie ? result.release_date && result.release_date.substring(0, 4) : result.first_air_date && result.first_air_date.substring(0, 4);
    title = isMovie ? result.title : result.original_name;
    runtime = result.runtime && result.runtime + 'm';
    genres = result.genres && result.genres.map(item => item.name).join(', ');
    overview = result.overview ? result.overview : '';
  }

	return (
		<>
		{loading ? (
      <>
        <Helmet>
          <title>Loading... | Nomfix</title>
        </Helmet>
        <Loader />
      </>
		): (
			<Container>
        {error && <Message text={error} color="red" />}
        <Helmet>
          <title>{title} | Nomfix</title>
        </Helmet>
				<BgImg bgImg={bg_img}></BgImg>
				<Contents>
          <Grid>
            <Left>
              <Img>
                <img src={image_url} />
              </Img>
            </Left>
            <Right>
              <Title>{title}</Title>
              <Info>
                {year && <span>{year}</span>}
                {runtime && <span>{runtime}</span>}
                {genres && <span>{genres}</span>}
              </Info>
              <Description>{overview}</Description>
            </Right>
          </Grid>
				</Contents>
			</Container>
		)}
		</>
	)
}

export default DetailPresenter;