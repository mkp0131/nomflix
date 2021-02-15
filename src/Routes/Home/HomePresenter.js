import Section from "Components/Section";
import React from "react";
import styled from 'styled-components';
import PropTypes from 'prop-types';
import Loader from 'Components/Loader';
import Message from 'Components/Message';
import Poster from 'Components/Poster';
import Helmet from 'react-helmet';

const Container = styled.section`
  padding: 10px;
`


class HomePresenter extends React.Component {


  render() {
    const {nowPlaying, upcoming, popular, loading, error} = this.props;
    return (
      <>
      <Helmet>
        <title>Movies | Nomfix</title>
      </Helmet>
      {loading ? (
        <Loader />
      ) : (
        <Container>
          {nowPlaying && nowPlaying.length > 0 && (
            <Section title="Now Playing" >
              {nowPlaying.map(item => <Poster key={item.id} id={item.id} title={item.title} image={item.poster_path} rating={item.vote_average} year={item.release_date.substring(0, 4)} />)}
            </Section>
          )}
          {upcoming && upcoming.length > 0 && (
            <Section title="Upcoming Movies" >
              {upcoming.map(item => <Poster key={item.id} id={item.id} title={item.title} image={item.poster_path} rating={item.vote_average} year={item.release_date.substring(0, 4)} />)}
            </Section>
          )}
          {popular && popular.length > 0 && (
            <Section title="Popular Movies" >
              {popular.map(item => <Poster key={item.id} id={item.id} title={item.title} image={item.poster_path} rating={item.vote_average} year={item.release_date.substring(0, 4)} />)}
            </Section>
          )}
          {error && <Message text={error} color="red" />}
        </Container>
      )}
      </>
    )
  }
}


HomePresenter.propTypes = {
  nowPlaying: PropTypes.array,
  upcoming: PropTypes.array,
  popular: PropTypes.array,
  error: PropTypes.string,
  loading: PropTypes.bool.isRequired,
}

export default HomePresenter;