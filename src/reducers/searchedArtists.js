export default (state = [], action) => {
  switch (action.type) {
    case 'SEARCH_ARTIST_START':
      return [];
    case 'SEARCH_ARTIST_END':
      return [
        ...state,
        ...action.payload
      ]
    case 'SEARCH_ARTIST_CLEAR':
      return [];
    default:
      return state;
  }
}
