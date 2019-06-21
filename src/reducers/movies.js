const FETCH_TRENDING_MOVIES ="FETCH_TRENDING_MOVIES";
const FETCH_LATEST_MOVIES = "FETCH_LATEST_MOVIES";
const FETCH_MOSTWATCHED_MOVIES = "FETCH_MOSTWATCHED_MOVIES";

let initialState={
  latest:[],
  trending:[],
  most_wanted:[]
};
export default (state = initialState, action) => {
	switch (action.type) {

		case FETCH_LATEST_MOVIES:
			return {
				latest: action.movies
      }
    case FETCH_TRENDING_MOVIES:
      return{
        trending:action.movies
      };
    case FETCH_MOSTWATCHED_MOVIES:
      return{
        most_watched:action.movies
      }
		default:
			return state
	}
}