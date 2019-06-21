import React from 'react';
import '../../scss/style.scss';
import Carousel from '../ui/Carousel';
import { connect } from 'react-redux';
import * as HomeActions from '../../actions/home';

class Home extends React.Component {
  componentDidMount() {
    this.props.fetchHomePageDetails();
  }
  render() {
    const { homeData } = this.props;
    if (homeData) {
      return (
        <div className="home-container">
          <div className="carousal-container">
            <h1>Latest</h1>
            <Carousel
              data={homeData.latest.results}
              genreMap={homeData.genreMap}
            />
          </div>
          <div className="carousal-container">
            <h1>Trending</h1>
            <Carousel
              data={homeData.trending.results}
              genreMap={homeData.genreMap}
            />
          </div>
          <div className="carousal-container">
            <h1>Most Watched</h1>
            <Carousel
              data={homeData.mostWatched.results}
              genreMap={homeData.genreMap}
            />
          </div>
        </div>
      );
    }
    return null;
  }
}

const mapStateToProps = state => {
  return {
    ...state.homeReducer
  };
};

const mapToDispatchProps = dispatch => {
  return {
    fetchHomePageDetails: () => {
      dispatch(HomeActions.fetchHomePageDetails());
    }
  };
};

export default connect(
  mapStateToProps,
  mapToDispatchProps
)(Home);
