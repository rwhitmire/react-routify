import { Component, PropTypes, createElement } from 'react'
import createRoute from './createRoute'
import beginRouting from './beginRouting'

class Router extends Component {
  constructor() {
    super()

    this.state = {
      component: null,
      context: null
    }
  }

  componentDidMount() {
    this.props.routes.forEach(route => {
      createRoute(route.path, (context) => {
        this.setState({
          component: route.component,
          context
        })
      })
    })

    beginRouting()
  }

  render() {
    if(!this.state.component) {
      return null
    }

    return createElement(this.state.component, {
      route: this.state.context
    })
  }
}

Router.propTypes = {
  routes: PropTypes.array.isRequired
}

export default Router
