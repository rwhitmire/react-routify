import React, { Component } from 'react'
import { connect } from 'react-redux'

class Users extends Component {
  constructor() {
    super()

    this.state = {
      count: 0
    }
  }

  handleClick() {
    this.setState(({count}) => {
      return {
        count: count + 1
      }
    })
  }

  render() {
    return (
      <div>
        Users: {this.props.route.params.id}
        <div>{this.state.count}</div>
        <button onClick={this.handleClick.bind(this)}>increment</button>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    route: state.route
  }
}

export default connect(mapStateToProps)(Users)
