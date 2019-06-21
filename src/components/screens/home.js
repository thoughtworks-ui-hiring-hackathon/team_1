import React from "react";
import '../../scss/style.scss';
class Home extends React.Component{
  render(){
    return(
      <div className="home-container">
        <div className="carousal-container">
          <h1>Latest</h1>
        </div>
        <div className="carousal-container">
          <h1>Trending</h1>
        </div>
        <div className="carousal-container">
          <h1>Most Watched</h1>
        </div>
      </div>
    )
  }
}

export default Home;