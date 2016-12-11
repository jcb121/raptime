import React, { Component } from 'react';
//import Measure from 'react-measure';
import './artist.css';

class ArtistRow extends Component {

  albums(){

  }

  render() {
    let item = this.props.artist;
    let range = this.props.range;

    let length = item['life-span'].end - item.start;
    let offset = item['life-span'].start - range[0] + 1;

    let style = {
      width: length/range.length*100 + '%',
      left: offset/range.length * 100 + '%'
    }

    return (
      <div className="artist" key={item.name}>
        <div className="artist_row">
          <img className="artist_image" alt="" src="" />
          <div className="artist__name" >{item.name}</div>
        </div>

        <div className="artist__graph">
          <div style={style} className="artist__graphline"></div>
          {this.albums()}
        </div>

      </div>
    )

  }
}

export default ArtistRow;
