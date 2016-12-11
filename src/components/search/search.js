import React, { Component } from 'react';
import { connect } from 'react-redux'
import { addArtist, searchArtists } from './search-actions'


import './search.css';
//import debounce from '../../functions/debounce/debounce';

let search = ({artists = [], addArtist, searchArtists }) => {

  let input;

  return (
    <div className="search">
      <form onSubmit={e => {
        e.preventDefault()
        if (!input.value.trim()) {
          return
        }
        searchArtists(input.value);
      }}>

        <label className="search__label">
          <span>Search</span>

          <input
          className="search__input"
          type="text"
          ref={node => {
            input = node
          }} />
        </label>

        <button type="submit">
          Search
        </button>
      </form>

      <ul className="results">
        {artists
          .sort(function(artistA, artistB){
            return Number(artistA.score) - Number(artistB.score)
          })
          .reverse()
          .map(artist => {

            let style = {
              fontSize: artist.score / 2
            }

            return (
              <li className="results__row" key={artist.id}>
                <button onClick={() => addArtist(artist.id)} style={style}>{artist.name}</button>
              </li>
            )
          }
        )}
      </ul>
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    artists: state.searchedArtists
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    addArtist: (id) => {
      dispatch(addArtist(id))
    },
    searchArtists: (query) => {
      dispatch(searchArtists(query))
    }
  }
}

const Search = connect(
  mapStateToProps,
  mapDispatchToProps
)(search)

export default Search;


/*
*/
