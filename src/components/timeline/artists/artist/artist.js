import React, { Component } from 'react';
//import Measure from 'react-measure';
import './artist.css';

class ArtistRow extends Component {

  albums(){
    return this.props.artist.releases.map(function(release){
      console.log(this, release);
      const range = this.props.range;

      var offset;

      if(release.date){
        offset = release.date.slice(0, 4) - range[0] + 1;
      }else{
        offset = range.length;
      }

      let style = {
        left: offset/range.length * 100 + '%'
      };

      return(
        <div style={style} key={release.id} className="artist__release">
          <span className="tooltiptext">
            {/* {release.title} */}
          </span>
        </div>
      )
    }.bind(this));

  }

  render() {

    let item = this.props.artist;
    let range = this.props.range;

    let length = item['life-span'].end - item['life-span'].start;
    let offset = item['life-span'].start - range[0] + 1;

    let style = {
      width: length/range.length * 100 + '%',
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
