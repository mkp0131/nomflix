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


class TVresenter extends React.Component {


  render() {
    const {airingToday, popular, topRated, loading, error} = this.props;
    return (
      loading ? (
        <Loader />
      ) : (
        <Container>
          {airingToday && airingToday.length > 0 && (
            <Section title="Airing Today" >
              {airingToday.map(item => <Poster key={item.id} id={item.id} title={item.original_name} image={item.poster_path} rating={item.vote_average} year={item.first_air_date.substring(0, 4)} isShow={true}/>)}
            </Section>
          )}
          {topRated && topRated.length > 0 && (
            <Section title="Top Rateed Shows" >
              {topRated.map(item => <Poster key={item.id} id={item.id} title={item.original_name} image={item.poster_path} rating={item.vote_average} year={item.first_air_date.substring(0, 4)} isShow={true}/>)}
            </Section>
          )}
          {popular && popular.length > 0 && (
            <Section title="Popular Shows" >
              {popular.map(item => <Poster key={item.id} id={item.id} title={item.original_name} image={item.poster_path} rating={item.vote_average} year={item.first_air_date.substring(0, 4)} isShow={true}/>)}
            </Section>
          )}
          {error && <Message text={error} color="red" />}
        </Container>
      )
    )
  }
}


TVresenter.propTypes = {
  nowPlaying: PropTypes.array,
  upcoming: PropTypes.array,
  popular: PropTypes.array,
  error: PropTypes.string,
  loading: PropTypes.bool.isRequired,
}

export default TVresenter;