import page from 'page'
import React, { Component } from 'react'

class Router extends Component {
  constructor() {
    super()

    this.state = {
      component: null
    }
  }

  componentDidMount() {
    this.props.routes.forEach(route => {
      page(route.path, (ctx) => {
        this.setState({
          component: route.component,
          ctx
        })
      })
    })

    page()
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
