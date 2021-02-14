import Section from "Components/Section";
import React from "react";
import styled from 'styled-components';
import PropTypes from 'prop-types';
import Loader from 'Components/Loader';
import Message from 'Components/Message';

const Container = styled.section`
  padding: 10px;
`


class HomePresenter extends React.Component {


  render() {
    const {nowPlaying, upcoming, popular, loading, error} = this.props;
    return (
      loading ? (
        <Loader />
      ) : (
        <Container>
          {nowPlaying && nowPlaying.length > 0 && (
            <Section title="Now Playing" >
              {nowPlaying.map(item => <div key={item.id}>{item.title}</div>)}
            </Section>
          )}
          {upcoming && upcoming.length > 0 && (
            <Section title="Upcoming Movies" >
              {upcoming.map(item => <div key={item.id}>{item.title}</div>)}
            </Section>
          )}
          {popular && popular.length > 0 && (
            <Section title="Popular Movies" >
              {popular.map(item => <div key={item.id}>{item.title}</div>)}
            </Section>
          )}
          {error && <Message text={error} color="red" />}
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