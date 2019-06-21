import React from "react";

class Navigation extends React.Component{
  render(){
    return(
      <header>
        <ul>
          <li><a href="/">Home</a></li>
          <li><a href="/explore">Explore</a></li>
        </ul>
      </header>
    );
  }
}

export default Navigation;