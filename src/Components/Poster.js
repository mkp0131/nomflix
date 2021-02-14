import React from 'react';
import styled from 'styled-components'

const Container = styled.div`

`
const ImageContainer = styled.div`

`
const Rating = styled.div`

`
const Title = styled.div`

`
const Year = styled.div`

`


const Poster = ({title, image, rating, year}) => {
  return (
    <Container>
      <ImageContainer>
        <img src="{image}" alt="" />
        <Rating>
          ★ 10
        </Rating>
      </ImageContainer>
      <Title></Title>
      <Year></Year>
    </Container>
  )
}

export default Poster;