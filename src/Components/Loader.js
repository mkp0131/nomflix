import React from 'react';
import styled from 'styled-components';

const Container = styled.section`
  width: 100vw;
  height: 100vh;
  position: relative;
`
const Spin = styled.div`
  width: auto;
  height: auto;
  position: absolute;
  left: 50%;
  top: 40%;
  transform: translate(-50%, -50%);
`

class Loader extends React.Component {

  render () {
    return (
      <Container>
        <Spin role="img" aria-label="Loading" >
          <div className="sk-double-bounce">
            <div className="sk-child sk-double-bounce1"></div>
            <div className="sk-child sk-double-bounce2"></div>
          </div>
        </Spin>
      </Container>
    )
  }
}

export default Loader;