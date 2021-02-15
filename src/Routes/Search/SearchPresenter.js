import React from "react";
import styled from 'styled-components';
import PropTypes from 'prop-types';
import Loader from 'Components/Loader';
import Section from "Components/Section";
import Message from "Components/Message";
import Poster from "Components/Poster";

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
	border-bottom: 1px solid #212121;
	padding-bottom: 10px;
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
                {movieResults.map(item => <Poster key={item.id} id={item.id} title={item.title} image={item.poster_path} rating={item.vote_average} year={item.release_date && item.release_date.substring(0, 4)} />)}
              </Section>
            )}
            {tvResults && tvResults.length > 0 && (
              <Section title="Shows" >
                {tvResults.map(item => <Poster key={item.id} id={item.id} title={item.original_name} image={item.poster_path} rating={item.vote_average} year={item.first_air_date && item.first_air_date.substring(0, 4)} isShow={true}/>)}
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