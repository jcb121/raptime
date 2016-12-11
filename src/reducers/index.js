import { combineReducers } from 'redux'
import visibilityFilter from './visibilityFilter'
import searchedArtists from './searchedArtists'
import timelineArtists from './timelineArtists'

const todoApp = combineReducers({
  visibilityFilter,
  searchedArtists,
  timelineArtists
})

export default todoApp
