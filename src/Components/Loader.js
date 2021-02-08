import React from 'react';
import styled from 'styled-components';

const Container = styled.section`
  width: 100vw;
  height: 100vh;
  position: relative;
`
const Spin = styled.div`
  width: 50px;
  height: 50px;
  background: red;
  position: absolute;
  left: 50%;
  top: 40%;
  transform: translate(-50%, -50%);
`

class Loader extends React.Component {

  render () {
    return (
      <Container>
        <Spin aria-label="Loading" >
         🍟
        </Spin>
      </Container>
    )
  }
}

export default Loader;