import * as Api from '../libraries/api';
import * as ScreenConstants from '../constants/Screen-names';
import axios from 'axios';

async function getMoviesByCategory() {
  const trending = await Api.get(
    'https://api.themoviedb.org/3/trending/movie/week?api_key=2bf60fc5d05776d2c899be78d34161c4'
  );

  const latest = await Api.get(
    'https://api.themoviedb.org/3/movie/now_playing?api_key=2bf60fc5d05776d2c899be78d34161c4&language=en-US&include_adult=false'
  );

  const mostWatched = await Api.get(
    'https://api.themoviedb.org/3/movie/popular?api_key=2bf60fc5d05776d2c899be78d34161c4&language=en-US&page=1'
  );

  const genre = await Api.get(
    'https://api.themoviedb.org/3/genre/movie/list?api_key=2bf60fc5d05776d2c899be78d34161c4&language=en-US'
  );
  let homeDetails = {
    trending,
    latest,
    mostWatched,
    genreMap: genre
  };
  return homeDetails;
}

export const fetchHomePageDetails = () => dispatch => {
  const homeObject = getMoviesByCategory();
  homeObject.then(res => {
    dispatch({
      type: ScreenConstants.HOME,
      data: res
    });
  });
};
