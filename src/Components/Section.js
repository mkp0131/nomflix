import React from 'react';
import styled from 'styled-components'


const Container = styled.div`
  background: green;
`

const Title = styled.div`
  font-weight: 900;
  font-size: 22px;
  color: red;
`

const Grid = styled.div`
  display: grid;
  grid-template-columns: 2fr 2fr 2fr 2fr;
  gap: 10px;
`

class Section extends React.Component {
  
  render() {
    const { title, children } = this.props;
    return (
      <Container>
        <Title>{title}</Title>
        <Grid>{children}</Grid>
      </Container>
    )
  }
}

export default Section;