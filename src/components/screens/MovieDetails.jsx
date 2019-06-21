import React from "react";
import axios from "axios";
import StarRatings from "react-star-ratings";
import "../../scss/screens/_movie_details.scss";
import API_KEY from "../../secret/secret";

let baseURL= "https://image.tmdb.org/t/p/w500/";
class MovieDetails extends React.Component{
  state={
    name:"",
    url:"",
    desc:"",
    cast:[],
    genre:[],
    director:"",
    movie_rating:0,
    relatedMovies:[]
  }
  getMovieDetails = async (movie_id) =>{
      let movieDetails = await axios.get(`https://api.themoviedb.org/3/movie/${movie_id}?api_key=${API_KEY}&language=en-US&append_to_response=credits`);
      let name = movieDetails.data.original_title;
      let url = baseURL+movieDetails.data.poster_path;
      console.log(url);
      let desc= movieDetails.data.overview;
      let cast= movieDetails.data.credits.cast.map(cast=>{
        return cast.name;
      });
      let genre = movieDetails.data.genres.map(genre=>{
        return genre.name;
      });
      let director = movieDetails.data.credits.crew.reduce((director,currentcrew)=>{
        if(currentcrew.job==="Director"){
          director=currentcrew.name;
        }
        return director;
      },"");
      let movie_rating = Math.floor((movieDetails.data.vote_average/2));
      this.setState(()=>{
        return{
          url,
          desc,
          cast,
          genre,
          director,
          movie_rating,
          name
        };
      })
  }
  componentDidMount(){
    this.getMovieDetails(this.props.match.params.id);
  }
  render(){
    return(
      <div className="movie-details-container">
        <section className="movie-poster"><img alt="movie-poster" src={this.state.url}/>
        {this.state.url!=="" &&<div class="favorite">Mark as favorite<i style={{"color":"red"}} class="fa fa-heart" aria-hidden="true"></i></div>}
        </section>
        <section className="details-cast">
          <section className="movie-desc"><h1>{this.state.name}</h1><p>{this.state.desc}</p></section> 
          <section className="movie-cast">
            <div>
              <div class="label"><strong>Genre</strong></div>
              <div>{this.state.genre.join(",")}</div>
            </div>
            <div>
              <div class="label"><strong>Cast</strong></div>
              <div class="cast-list">{this.state.cast.slice(0,10).join(",")}</div>
            </div>
            <div>
              <div class="label"><strong>Director</strong></div>
              <div>{this.state.director}</div></div>
            <div>
              <div class="label"><strong>Movie Rating</strong></div>
              <div><StarRatings
                rating={this.state.movie_rating}
                starDimension="20px"
                starSpacing="5px"
              /></div>
            </div>
          </section>   
        </section>
        <section className="related-movies">Related Movies</section>
      </div>
    )
  }
}


export default MovieDetails;