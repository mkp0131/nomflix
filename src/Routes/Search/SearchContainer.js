import React from 'react';
import SearchPresenter from "./SearchPresenter";
import { tvApi, moviesApi } from "Components/api";

class SearchContainer extends React.Component {
  state = {
    searchTerm: '',
    tvResults: {},
    movieResults: {},
    error: null,
    loading: false,
    pastTerm: '',
  }

  updateTerm = (e) => {
    const {target: {value}} = e;
    this.setState({
      searchTerm: value,
    });
  }

  handleSubmit = (e) => {
    e.preventDefault();
    const {searchTerm} = this.state;
    if(searchTerm !== '') {
      this.setState({
        pastTerm: searchTerm,
      });
      this.searchByTerm();
    }
  }

  searchByTerm = async () => {
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



  render() {
    return (
      <SearchPresenter {...this.state} handleSubmit={this.handleSubmit} updateTerm={this.updateTerm} />
    )
  }
}

export default SearchContainer;