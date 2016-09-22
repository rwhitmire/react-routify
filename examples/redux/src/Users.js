import React, { Component } from 'react'
import { connect } from 'react-redux'

class Users extends Component {
  render() {
    const foo = this.props

    return (
      <div>
        Users: {this.props.route.params.id}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    route: state.route.context
  }
}

export default connect(mapStateToProps)(Users)
