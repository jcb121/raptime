function formatMusicBrainz(artist){

  if(artist.type === 'Person'){
    // TODO; fix if it's a person... need more data.
  }

  if(artist['releases']){

  }

  if(artist['life-span']){

    let artistStart = artist['life-span'].begin
    let artistEnd = artist['life-span'].end;
    let artistEnded = artist['life-span'].ended;

    if(artistStart){
      artistStart = Number(artistStart.slice(0,4));
    }

    if(artistEnd){
      artistEnd = Number(artistEnd.slice(0,4));
    }

    if(!artistEnded){
      artistEnd = new Date().getFullYear();
    }

    artist['life-span'].start = artistStart;
    artist['life-span'].end = artistEnd;

  }

  return artist;
}

export function searchArtists(query){
  return function(dispatch){

    dispatch(searchArtistStart(query));

    query = query.replace(' ', '+')
    const base =  'http://musicbrainz.org/ws/2/artist/?query=artist:'
    const end = '&fmt=json';
    let url = base + query + end;
    console.log(url);
    fetch(url).then(function(response){
      return response.json();
    }).then(function(results){
      dispatch(searchArtistEnd(results.artists))
    });
  }
}

export function addArtist(id){
  return function(dispatch){
    dispatch(searchArtistClear());
    dispatch(addArtistStart(id));

    let base = 'http://musicbrainz.org/ws/2/artist/';
    let end = '?fmt=json&inc=tags+releases';


    fetch(base + id + end).then(response => {
      return response.json();
    })
    .then(function(result){
      result = formatMusicBrainz(result);
      dispatch(addArtistEnd(result))
    })
  }
};

function searchArtistStart(query) {
  return {
    type: 'SEARCH_ARTIST_START',
    payload: query
  }
}
function searchArtistClear(query) {
  return {
    type: 'SEARCH_ARTIST_CLEAR'
  }
}

function searchArtistEnd(result) {
  return {
    type: 'SEARCH_ARTIST_END',
    payload: result
  }
}

function addArtistStart(id) {
  return {
    type: 'ADD_ARTIST_START',
    payload: id
  }
}

function addArtistEnd(result) {
  return {
    type: 'ADD_ARTIST_END',
    payload: result
  }
}
