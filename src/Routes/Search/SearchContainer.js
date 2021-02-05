import React from 'react';
import SearchPresenter from "./SearchPresenter";


class SearchContainer extends React.Component {
  state = {
    result: null,
    error: null,
    loading: true
  }

  render() {
    return (
      <SearchPresenter {...this.state}/>
    )
  }
}

export default SearchContainer;