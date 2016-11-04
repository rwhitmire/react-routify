import { LOCATION_CHANGE } from './actionCreators'

export default function(state = { path: '/', _private: {}}, action) {
  switch(action.type) {
  case LOCATION_CHANGE:
    return {
      _private: { component: action.component },
      ...action.context
    }
  default:
    return state
  }
}
