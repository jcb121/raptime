export default (state = [], action) => {
  switch (action.type) {
    case 'ADD_ARTIST_START':
      return state;
      case 'ADD_ARTIST_END':
        return [
          ...state,
          action.payload
        ];
    case 'REMOVE_ARTIST':
      return [];
    default:
      return state;
  }
}
