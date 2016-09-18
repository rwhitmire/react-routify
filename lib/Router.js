import React, { Component } from 'react'
import createRoute from './createRoute'
import beginRouting from './beginRouting'

class Router extends Component {
  constructor() {
    super()

    this.state = {
      component: null
    }
  }

  componentDidMount() {
    this.props.routes.forEach(route => {
      createRoute(route.path, (ctx) => {
        this.setState({
          component: route.component,
          ctx
        })
      })
    })

    beginRouting()
  }

  render() {
    if(!this.state.component) {
      return null
    }

    return React.createElement(this.state.component, {
      route: this.state.ctx
    })
  }
}

export default Router
