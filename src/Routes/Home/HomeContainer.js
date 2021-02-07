import React from 'react';
import HomePresenter from "./HomePresenter";
import { moviesApi } from "Components/api";

class HomeContainer extends React.Component {
  state = {
    nowPlaying: null,
    upcoming: null,
    popular: null,
    error: null,
    loading: true
  }

  async componentDidMount() {
    try {
      const {data: {results: nowPlaying}} = await moviesApi.nowPlaying();
      const {data: {results: upComing}} = await moviesApi.upComing();
      const {data: {results: popular}} = await moviesApi.popular();
console.log('==== movie api ===');
console.log('nowPlaying', nowPlaying);
console.log('upComing', upComing);
console.log('popular', popular);
console.log('==== movie api ===');
      this.setState({
        nowPlaying,
        upComing,
        popular,
      });
    } catch (error) {
      this.setState({
        error: "Can't find moives list"
      })
    } finally {
      this.setState({
        loading: false
      })
    }
  }

  render() {
    return (
      <HomePresenter {...this.state} />
    )
  }
}

export default HomeContainer;