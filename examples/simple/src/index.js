import React from 'react'
import ReactDOM from 'react-dom'
import { Router, Link } from '../../../lib'

const Home = () => <div>Home</div>
const About = () => <div>About</div>
const Users = props => <div>{props.route.params.id}</div>
const NotFound = () => <div>404</div>

const routes = [
  { path: '/', component: Home },
  { path: '/about', component: About },
  { path: '/users/:id', component: Users },
  { path: '*', component: NotFound }
]

const rootComponent = (
  <div>
    <Link to="/" activeClassName="active">Home</Link>
    <Link to="/about" activeClassName="active">About</Link>
    <Link to="/users/10" activeClassName="active">user 10</Link>
    <Router routes={routes} />
  </div>
)

ReactDOM.render(
  rootComponent,
  document.getElementById('root')
)
