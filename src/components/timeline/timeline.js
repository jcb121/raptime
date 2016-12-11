import React, { Component } from 'react';
import { connect } from 'react-redux'
import { } from './timeline-actions'


import Artists from './artists/artists';
import Background from './background/background';

import './timeline.css';

let timeline = ({ artists = [] }) => {

  console.log('timeline', artists);

  let meta = timelineRange(artists);

  return (
    <div className="timeline">
      <Background range={meta.range} ></Background>
      <Artists range={meta.range} artists={artists}></Artists>
    </div>
  )
}

function timelineRange(artists){
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


const mapStateToProps = (state) => {
  return {
    artists: state.timelineArtists
  }
}

const mapDispatchToProps = (dispatch) => {
  return {}
}

const TimeLine = connect(
  mapStateToProps,
  mapDispatchToProps
)(timeline)

export default TimeLine;
