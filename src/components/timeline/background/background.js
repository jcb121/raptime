import React, { Component } from 'react';
import './background.css';

class Background extends Component {
  render(){
    let range = this.props.range;
    let blockStyle = {
      'width': 100 / range.length + '%'
    }

    return <div className="timeline__graph">{
      range.map((year)=>{
        return (
          <div key={year} style={blockStyle} className="timeline__block">
            <div className="timeline__year" >{year}</div>
          </div>
        )
      })
    }</div>

  };
}

export default Background;
