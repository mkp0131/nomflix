import React from 'react';
import styled from 'styled-components'


const Container = styled.div`
  margin-bottom: 50px;
`

const Title = styled.div`
  font-weight: 900;
  font-size: 22px;
  color: red;
	margin-bottom: 20px;
`

const Grid = styled.div`
  display: grid;
	grid-template-columns: repeat(auto-fit, 130px);
	justify-content: space-between;
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