# Quick Start

```
npm i --save react-routify
```

```js
import React, { Component } from 'react'
import { Router, Link } from 'react-routify'

const Home = () => <div>home</div>
const About = () => <div>about</div>
const NotFound = () => <div>404</div>

const routes = [
  { path: '/', component: Home },
  { path: '/about', component: About },
  { path: '*', component: NotFound }
]

class App extends Component {
  render() {
    return (
      <div>
        <nav>
          <Link to="/">home</Link>
          <Link to="/about">about</Link>
        </nav>
        <Router routes={routes} />
      </div>
    )
  }
}
```
