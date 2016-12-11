import React, { Component } from 'react';
//import Measure from 'react-measure';
import Artists from './artists/artists';
import './timeline.css';
import Background from './background/background';

class TimeLine extends Component {

  timelineRange(artists){
    let end;
    let start;

    artists.forEach(function(artist){

      let artistEnd = artist['life-span'].end;
      let artistStart = artist['life-span'].start;

      //initial;
      end = end ? end : artistEnd;
      start = start ? start : artistStart;
      //only larger;
      start = start < artistStart ? start: artistStart;
      end = end > artistEnd ? end: artistEnd;
    })

    let range = [];
    for(let i = Number(start) - 1; i <= Number(end) + 1; i++){
      range.push(i);
    }

    return {
      end,
      start,
      range
    };
  }

  render() {

    let meta = this.timelineRange(this.props.artists.results);
    let artists = this.props.artists.results;

    return (
      <div className="timeline">
        <Background range={meta.range} ></Background>
        <Artists range={meta.range} artists={artists}></Artists>
      </div>
    )
  }
}

export default TimeLine;


/*
*/
