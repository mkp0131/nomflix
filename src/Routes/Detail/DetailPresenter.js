import Loader from 'Components/Loader';
import Message from 'Components/Message';
import React from 'react';
import styled, {keyframes} from 'styled-components'
import noPoster from "assets/noPosterSmall.png";
import imdb from "assets/imdb.svg";
import { Helmet } from 'react-helmet-async';
import YoutubeSlider from 'Components/YoutubeSlider';

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
	width: 100%;
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
	line-height: 1.2;
  & > div > span {
    margin-right: 20px;
    position: relative;
  }
  & > div > span:before {
    content: '';
    position: absolute;
    right: -10px;
    top: 55%;
    width: 1px;
    height: 50%;
    background: #fff;
    transform: translateY(-50%);
  }
  & > div > span:last-child {
    margin-right: 0;
  }
  & > div > span:last-child:before {
    display: none;
  } 
`
const Description = styled.div`
  font-size: 18px;
  line-height: 1.4;
`
const Imdb = styled.a`
  margin-top: 10px;
	display: inline-block;
`
const Production = styled.div`
  margin-top: 50px;
  display: flex;
	flex-wrap: wrap;
	gap: 50px;
  place-items: center;
	text-align: center;
	filter: grayscale(1);
	opacity: 0.8;
	color: #666;
	font-weight: 700;
	& > div {
		width: 140px;
	}
	& img {
		width: 100%;
	}
`
const Youtube = styled.div`
  margin-top: 40px;
`

const DetailPresenter = ({loading, result, isMovie, error}) => {
  let image_url = '';
  let year = '';
  let title = '';
  let runtime = '';
  let genres = '';
  let overview = '';
  let bg_img = '';
  let language = '';
  let production = '';
  let youtube_list = '';

  if(result) {
    bg_img = result.backdrop_path && result.backdrop_path;
    image_url = result.poster_path ? `https://image.tmdb.org/t/p/original${result.poster_path}` : noPoster;
    year = isMovie ? result.release_date && result.release_date.substring(0, 4) : result.first_air_date && result.first_air_date.substring(0, 4);
    title = isMovie ? result.title : result.original_name;
    runtime = result.runtime && result.runtime + 'min';
    genres = result.genres && result.genres.map(item => item.name).join(', ');
    overview = result.overview && result.overview;
		language = result.spoken_languages && result.spoken_languages[0].english_name;
		production = result.production_companies && result.production_companies.map((item, index) => {
			return item.logo_path !== null && <div key={item.id}><img src={`https://image.tmdb.org/t/p/w500${item.logo_path}`} alt={item.name} /></div>;
		});
		youtube_list = result.videos && result.videos.results.length && result.videos.results.map(item => item.key);
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
                <img src={image_url} alt={title} />
              </Img>
            </Left>
            <Right>
              <Title>{title}</Title>
              <Info>
								<div>
									{year && <span>{year}</span>}
									{runtime && <span>{runtime}</span>}
									{genres && <span>{genres}</span>}
								</div>
								<div>
									Language: {language}
								</div>
								<div>
									{result.imdb_id && 
										(<Imdb href={`https://www.imdb.com/title/${result.imdb_id}`} target="_blank">
											<img src={imdb} alt="imdb" />
										</Imdb>)
									}
								</div>
              </Info>
              <Description>{overview}</Description>
							{
								youtube_list.length > 0 &&
								(<Youtube>
									<YoutubeSlider youtubeList={youtube_list} />
								</Youtube>)
							}
							<Production>
								{production}
							</Production>
            </Right>
          </Grid>
				</Contents>
			</Container>
		)}
		</>
	)
}

export default DetailPresenter;