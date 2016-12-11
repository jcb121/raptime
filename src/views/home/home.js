import React, { Component } from 'react';
import './home.css';
import TimeLine from '../../components/timeline/timeline'
import Search from '../../components/search/search'

class Home extends Component {
  render(){
    return(
      <div className="App">
        <Search />
        <TimeLine />
      </div>
    )
  }
}

export default Home;
