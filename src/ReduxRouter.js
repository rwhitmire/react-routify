import { Component,  createElement } from 'react'
import { PropTypes } from 'prop-types'
import createRoute from './createRoute'
import beginRouting from './beginRouting'
import replaceHistoryState from './replaceHistoryState'
import { changeLocation } from './actionCreators'
import internalStore from './store'

class ReduxRouter extends Component {
  constructor() {
    super()

    this.state = {
      component: null,
      context: null
    }
  }

  componentDidMount() {
    const { store, routes } = this.props

    routes.forEach(route => {
      createRoute(route.path, (context) => {
        store.dispatch(changeLocation(route.component, context))
      })
    })

    store.subscribe(() => {
      const state = store.getState()

      // update the url without modifying history
      replaceHistoryState(state.route.path)
      internalStore.emitChange({path: state.route.path})

      this.setState({
        component: state.route._private.component,
        context: state.route.context
      })
    })

    beginRouting()
  }

  render() {
    if(!this.state.component) {
      return null
    }

    return createElement(this.state.component)
  }
}

ReduxRouter.propTypes = {
  store: PropTypes.object.isRequired,
  routes: PropTypes.array.isRequired
}

export default ReduxRouter
