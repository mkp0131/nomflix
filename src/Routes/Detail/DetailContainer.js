import React from 'react';
import DetailPresenter from './DetailPresenter';


class DetailContainer extends React.Component {
  state = {
    result: null,
    error: null,
    loading: true
  }

  

  render() {
    return (
      <DetailPresenter {...this.state}/>
    )
  }
}

export default DetailContainer;