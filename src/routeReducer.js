import { LOCATION_CHANGE } from './actionCreators'

export default function(state = {context: null, _private: {}}, action) {
  switch(action.type) {
    case LOCATION_CHANGE:
      return {
        context: action.context,
        _private: {
          component: action._private.component
        }
      }
    default:
      return state
  }
}
