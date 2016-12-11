import React, { Component } from 'react';
import Artist from './artist/artist';
import './artists.css';

class Artists extends Component {
  render(){
    let artists = this.props.artists;
    let range = this.props.range;

    return(
      <div className="timeline__rows">
        {artists.map((artist)=>{
          return <Artist key={artist.name} range={range} artist={artist}></Artist>
        })}
      </div>
    )
  }
}
export default Artists;
