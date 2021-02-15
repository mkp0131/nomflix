import React from 'react';
import DetailPresenter from './DetailPresenter';
import { tvApi, moviesApi } from "Components/api";

class DetailContainer extends React.Component {
	constructor(props) {
		super(props);
		const {
			location: {
				pathname
			}
		} = props;
		this.state = {
			result: {},
			error: '',
			loading: true,
			isMovie: pathname.includes('/movie/'),
		}
	}

  async componentDidMount() {
		const {
			match: {
				params: {
					id
				}
			},
			history: {
				push
			}
		} = this.props;
		const {isMovie} = this.state;
		const parsedId = parseInt(id);
		if(isNaN(parsedId)) {
			push('/');
			return;
		}
		let result = null;
		try {
			if(isMovie) {
				({data: result} = await moviesApi.detail(parsedId));
			} else {
				({data: result} = await tvApi.detail(parsedId));
			}
		} catch (error) {
			this.setState({
				error: "Can't find anything."
			})
		} finally {
			this.setState({
				loading: false,
				result
			})
		}
	}



  render() {
    return (
      <DetailPresenter {...this.state}/>
    )
  }
}

export default DetailContainer;