import React from 'react';
import TVPresenter from "./TVPresenter";

class TVContainer extends React.Component {
  state = {
    result: null,
    erorr: null,
    loading: true,
  }

  render() {
    return (
      <TVPresenter {...this.state}/>
    )
  }
}

export default TVContainer;