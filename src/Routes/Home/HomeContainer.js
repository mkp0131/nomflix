import React from 'react';
import HomePresenter from "./HomePresenter";

class HomeContainer extends React.Component {
  state = {
    result: null,
    error: null,
    loading: true
  }

  render() {
    return (
      <HomePresenter {...this.state} />
    )
  }
}

export default HomeContainer;