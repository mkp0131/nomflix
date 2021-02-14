import React from "react";
import styled from 'styled-components';
import PropTypes from 'prop-types';

const Container = styled.div`
  position: absolute;
  left: 50%;
  top: 40%;
  transform: translate(-50%, -50%);
  color: ${props => props.color};
  font-size: 22px;
  font-weight: 700;
`

const Error = ({text, color}) => {
  return (
    <Container color={color}>{text}</Container>
  )
}

export default Error;