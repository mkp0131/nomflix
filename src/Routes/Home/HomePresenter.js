import Section from "Components/Section";
import React from "react";
import styled from 'styled-components';
import PropTypes from 'prop-types';
import Loader from 'Components/Loader';

const Container = styled.section`
  padding: 10px;
  background: blue;
`


class HomePresenter extends React.Component {


  render() {
    const {nowPlaying, upcoming, popular, loading} = this.props;
    return (
      loading ? (
        <Loader />
      ) : (
        <Container>
          {nowPlaying && nowPlaying.length > 0 && (
            <Section title="Now Playing" >
              {nowPlaying.map(item => item.title)}
            </Section>
          )}
          {upcoming && upcoming.length > 0 && (
            <Section title="Upcoming" >
              {upcoming.map(item => item.title)}
            </Section>
          )}
          {popular && popular.length > 0 && (
            <Section title="Now Playing" >
              {popular.map(item => item.title)}
            </Section>
          )}
        </Container>
      )
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