// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import React from 'react';
import styled from 'styled-components'
import playIcon from 'assets/playIcon.svg';
// Import Swiper styles
import 'swiper/swiper.scss';


const Video = styled.a`
	width: 100%;
	border-radius: 5px;
	overflow: hidden;
	position: relative;
	& > img {
		width: 100%;
		vertical-align: top;
	}
`
const PlayIcon = styled.div`
	position: absolute;
	left: 50%;
	top: 50%;
	transform: translate(-50%, -50%);
	width: 20%;
`

const fn = ({youtubeList}) => {
  return (
    <Swiper
      spaceBetween={10}
      slidesPerView={3}
    >
			{youtubeList.map(item => (
				<SwiperSlide key={item}>
					<Video href={`https://youtu.be/${item}`} target="_blank">
						<img src={`https://i.ytimg.com/vi/${item}/mqdefault.jpg`} alt="no Thumnail"/>
						<PlayIcon>
							<img src={playIcon} alt="Play" />
						</PlayIcon>
					</Video>
				</SwiperSlide>
			))}
      
    </Swiper>
  );
};

export default fn;