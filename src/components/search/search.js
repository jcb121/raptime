import React, { Component } from 'react';
import './search.css';
import debounce from '../../functions/debounce/debounce';

class Search extends Component {
  state = {
    query:'',
    results:[]
  }

  changed(event){
    let query = event.target.value;

    this.setState({query})
    if(query.length === ''){
      this.setState({'results':[]})
    }

    if(query.length >= 3){
      debounce(function(){
        this.searchArtists(query).then(function(results){
          this.setState({results})
        }.bind(this))
      }.bind(this), 200)();
    }
  }

  searchArtists(query){
    return new Promise(function(resolve, reject){

      query = query.replace(' ', '+')

      const base =  'http://musicbrainz.org/ws/2/artist/?query=artist:'
      const end = '&fmt=json';
      let url = base + query + end;

      fetch(url).then(function(response){
        return response.json();
      }).then(function(results){
        resolve(results.artists);
      })
    })
  }

  selected(id){
    this.props.action(id)
  }

  artistRows(){
    return this.state.results
    .sort(function(artistA, artistB){
      return Number(artistA.score) - Number(artistB.score)
    })
    .reverse()
    .map(function(artist){

      let style = {
        fontSize: artist.score / 2
      }

      return (
        <li className="results__row" key={artist.id}>
          <button onClick={this.selected.bind(this, artist.id)} style={style}>{artist.name}</button>
        </li>
      )
    }.bind(this));
  }

  render() {
    return (
      <div className="search">
        <label className="search__label">
          <span>Search</span>
          <input onChange={this.changed.bind(this)} className="search__input" type="text" />
        </label>
        <ul className="results">
          {this.artistRows()}
        </ul>
      </div>
    )
  }
}

export default Search;


/*
*/
