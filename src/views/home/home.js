import React, { Component } from 'react';
import './home.css';
import TimeLine from '../../components/timeline/timeline'
import Search from '../../components/search/search'

class Home extends Component {

  constructor(props){
    super(props);

    this.state = {
      artists:{
        meta:{},
        results:[]
      }
    }
    this.addArtist('164f0d73-1234-4e2c-8743-d77bf2191051');
  }

  /*Updates state*/
  addArtists(ids){
    this.getArtists(ids).then(function(artists){

      this.setState({artists: {
        ...this.state.artists,
        results: [
          ...this.state.artists.results,
          ...artists
        ]
      }});

    }.bind(this));
  }

  /*Updates state*/
  addArtist(id){
    this.getArtist(id).then(function(artist){
      console.log(artist);
      this.setState({artists: {
        ...this.state.artists,
        results: [
          ...this.state.artists.results,
          artist
        ]
      }});
    }.bind(this));
  }

  /*HTTP*/
  getArtist(id){
    let base = 'http://musicbrainz.org/ws/2/artist/';
    let end = '?inc=aliases&fmt=json';
    let self = this;
    return new Promise(
      function(resolve, reject){
        fetch(base + id + end).then(response => {
          return response.json();
        })
        .then(function(results){
          results = self.formatMusicBrainz(results);
          resolve(results);
        })
      }
    );
  }

  /*HTTP*/
  getArtists(ids){
    const promises = ids.map(id=>{
      return this.getArtist(id)
    })
    return Promise.all(promises);
  }

  formatMusicBrainz(artist){

    if(artist.type === 'Person'){
      // TODO; fix if it's a person... need more data.
    }

    if(artist['life-span']){

      let artistStart = Number(artist['life-span'].begin.slice(0,4));
      let artistEnd = artist['life-span'].end;

      if(artistEnd){
        artistEnd = Number(artistEnd.slice(0,4));
      }else{
        artistEnd = 2016;
      }

      artist['life-span'].start = artistStart;
      artist['life-span'].end = artistEnd;

    }

    return artist;
  }

  render(){
    return(
      <div className="App">
        <Search action={this.addArtist.bind(this)} ></Search>
        <TimeLine artists={this.state.artists}></TimeLine>
      </div>
    )
  }
}

export default Home;
