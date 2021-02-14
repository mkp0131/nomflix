import React from 'react';
import TVPresenter from "./TVPresenter";
import { tvApi } from "Components/api";

class TVContainer extends React.Component {
  state = {
    airingToday: null,
    popular: null,
    topRated: null,
    erorr: null,
    loading: true,
  }

  async componentDidMount() {
    try {
      const {data: {results: airingToday}} = await tvApi.airingToday();
      const {data: {results: popular}} = await tvApi.popular();
      const {data: {results: topRated}} = await tvApi.topRated(); 
      this.setState({
        airingToday,
        popular,
        topRated
      })
    } catch (error) {
      this.setState({
        error: "Can't find TV list"
      })
    } finally {
      this.setState({
        loading: false
      })
    }
  }
  
  render() {
    return (
      <TVPresenter {...this.state}/>
    )
  }
}

export default TVContainer;