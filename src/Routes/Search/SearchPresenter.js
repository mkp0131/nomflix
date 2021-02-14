import React from "react";
import styled from 'styled-components';
import PropTypes from 'prop-types';
import Loader from 'Components/Loader';
import Section from "Components/Section";
import Message from "Components/Message";

const Container = styled.section`
  padding: 10px;
`

const Form = styled.form`
  margin-bottom: 30px;
`;

const Input = styled.input`
  all: unset;
  font-size: 22px;
  width: 100%;
`

const SearchPresenter = ({tvResults, movieResults, error, loading, handleSubmit, updateTerm, pastTerm}) => {
    return (
      <Container>
        <Form onSubmit={handleSubmit}>
          <Input type="text" placeholder="Search....." onChange={updateTerm}/>
        </Form>
        {loading ? (
          <Loader />
        ) : ( 
          <>
            {movieResults && movieResults.length > 0 && (
              <Section title="Movies" >
                {movieResults.map(item => <div key={item.id}>{item.title}</div>)}
              </Section>
            )}
            {tvResults && tvResults.length > 0 && (
              <Section title="Shows" >
                {tvResults.map(item => <div key={item.id}>{item.name}</div>)}
              </Section>
            )}
            {error && <Message text={error} color="red" />}
            {
              movieResults &&
              tvResults &&
              movieResults.length === 0 &&
              tvResults.length === 0 &&
              <Message text={`Nothing Found: ${pastTerm}`} color="gray" />
            }
          </>
        )}
      </Container>
    );
}

export default SearchPresenter;