import React from "react";
import styled from 'styled-components';
import PropTypes from 'prop-types';
import Loader from 'Components/Loader';
import Section from "Components/Section";

const Container = styled.section`
  padding: 10px;
`


class TVresenter extends React.Component {


  render() {
    const {airingToday, popular, topRated, loading} = this.props;
    return (
      loading ? (
        <Loader />
      ) : (
        <Container>
          {airingToday && airingToday.length > 0 && (
            <Section title="Airing Today" >
              {airingToday.map(item => <div key={item.id}>{item.name}</div>)}
            </Section>
          )}
          {topRated && topRated.length > 0 && (
            <Section title="Top Rateed Shows" >
              {topRated.map(item => <div key={item.id}>{item.name}</div>)}
            </Section>
          )}
          {popular && popular.length > 0 && (
            <Section title="Popular Shows" >
              {popular.map(item => <div key={item.id}>{item.name}</div>)}
            </Section>
          )}
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