import React from "react";
import axios from "axios";
import API_KEY from "../../secret/secret";
import "../../scss/screens/_actor_details.scss";
let baseURL= "https://image.tmdb.org/t/p/w500/";

class ActorDetails extends React.Component{
  state={
    name:"",
    dob:"",
    desc:"",
    image_url:"",
    filmography:[],
    star_rating:""
  }
  getActorDetails = async (id) =>{
    let response_actor = await axios.get(`https://api.themoviedb.org/3/person/${id}?api_key=${API_KEY}`);
    let response_filmography = await axios.get(`https://api.themoviedb.org/3/person/${id}/movie_credits?api_key=${API_KEY}&language=en-US`);
    console.log(response_filmography);
    let name = response_actor.data.name;
    let dob = response_actor.data.birthday;
    let desc = response_actor.data.biography;
    let image_url = baseURL+response_actor.data.profile_path;
    let star_rating = Math.round(response_actor.data.popularity * 10);
    this.setState(()=>{
      return{
        name,
        dob,
        desc,
        image_url,
        star_rating
      }
    })
  } 
  componentDidMount(){
    this.getActorDetails(this.props.match.params.id);
  }
  render(){
    return(
      <div className="actor-container">
        <div className="actor-information-container">
          <div className="actor_img"><img src={this.state.image_url} alt="actor-image"/></div>
          <div className="actor-desc">
              <div>
                  <div className="n-dob">
                      <div>{this.state.name}</div>
                      <div>{this.state.dob}</div>
                  </div>
                  <div className="rating">
                    {this.state.star_rating}
                  </div>
              </div>
              <div className="bio">
                <p>{this.state.desc}</p>
              </div>
          </div>
        </div>
        <div className="filmography">

        </div>
      </div>
    )
  }
}

export default ActorDetails;