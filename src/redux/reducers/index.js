import { SET_IS_LOADING } from '../constants'
import { combineReducers } from 'redux'
import relics from './relicsReducer'

export const isLoading = (state = false, action = {}) => {
  switch ( action.type ) {
    case SET_IS_LOADING: return action.payload
    default: return state
  }
}

export default combineReducers({
  relics,
})
