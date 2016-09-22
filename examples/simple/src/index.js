import React from 'react'
import ReactDOM from 'react-dom'
import { Router } from '../../../lib'

const Home = () => <div>Home</div>
const About = () => <div>About</div>
const Users = props => <div>{props.route.params.id}</div>

const routes = [
  { path: '/', component: Home },
  { path: '/about', component: About },
  { path: '/users/:id', component: Users }
]

const rootComponent = (
  <div>
    <a href="/">Home</a>
    <a href="/about">About</a>
    <a href="/users/10">user 10</a>
    <Router routes={routes} />
  </div>
)

ReactDOM.render(
  rootComponent,
  document.getElementById('root')
)
