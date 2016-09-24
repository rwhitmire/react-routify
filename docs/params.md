# Route Parameters

Route parameters are passed to components via `props.route`.

```js
const Users = props => <div>{props.route.params.id}</div>

const routes = [
  { path: '/users/:id', component: Users }
]
```

When using Redux, route information is available on `store.route`

```js
class Users extends Component {
  render() {
    return <div>{this.props.route.params.id}</div>
  }
}

const mapStateToProps = state => {
  return {
    route: state.route
  }
}

export default connect(mapStateToProps)(Users)
```
