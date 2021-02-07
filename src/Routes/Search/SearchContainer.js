import React from 'react';
import SearchPresenter from "./SearchPresenter";
import { tvApi, moviesApi } from "Components/api";

class SearchContainer extends React.Component {
  state = {
    searchTerm: 'code',
    tvResults: null,
    movieResults: null,
    error: null,
    loading: true
  }

  handleSubmit = () => {
    const {searchTerm} = this.state;
    if(searchTerm !== '') {
      this.searchByTerm();
    }
  }

  searchByTerm = async () => {
    console.log('검색 실행');
    const {searchTerm} = this.state;
    this.setState({
      loading: true
    })
    try {
      const {data: {results: tvResults}} = await tvApi.search(searchTerm);
      const {data: {results: movieResults}} = await moviesApi.search(searchTerm);
      this.setState({
        tvResults,
        movieResults
      })
    } catch (error) {
      this.setState({ error: "Can't find results." });
    } finally {
      this.setState({
        loading: false
      })
    }
  }

  componentDidMount() {
    this.handleSubmit();
  }

  render() {
    console.log(this.state)
    return (
      <SearchPresenter {...this.state} handleSubmit={this.handleSubmit}/>
    )
  }
}

export default SearchContainer;