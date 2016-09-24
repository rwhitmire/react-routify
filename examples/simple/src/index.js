import React from 'react'
import ReactDOM from 'react-dom'
import { Router, Link } from '../../../lib'

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
    <Link href="/">Home</Link>
    <Link href="/about">About</Link>
    <Link href="/users/10">user 10</Link>
    <Router routes={routes} />
  </div>
)

ReactDOM.render(
  rootComponent,
  document.getElementById('root')
)
