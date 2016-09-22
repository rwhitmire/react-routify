# React Routify [![Build Status](https://travis-ci.org/rwhitmire/react-routify.svg?branch=master)](https://travis-ci.org/rwhitmire/react-routify)

The purpose of this library is to provide routing to React applications without
scattering domain specific language throughout your codebase.

### Quick Start

```
npm i --save react-routify
```

``` javascript
import React, { Component } from 'react'
import { Router } from 'react-routify'

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
          <a href="/">home</a>
          <a href="/about">about</a>
        </nav>
        <Router routes={routes} />
      </div>
    )
  }
}
```

### Nested Components

React components are composable. Use higher order components for nesting.

``` javascript
const Admin = Child => props => {
  return (
    <div>
      <div>
        admin menu
      </div>
      <Child {...props} />
    </div>
  )
}

const Users = props => <div>users</div>
const Settings = props => <div>settings</div>

const routes = [
  { path: '/admin/users', component: Admin(Users) },
  { path: '/admin/settings', component: Admin(Settings) }
]
```

If you believe this is too redundant, refactor into a function.

``` javascript
const createAdminRoute = (path, component) => {
  return { path: `/admin/${path}`, component: Admin(component) }
}

const routes = [
  createAdminRoute('users', Users),
  createAdminRoute('settings', Settings)
]
```

### Routing API

This library is an abstraction over [page.js](https://visionmedia.github.io/page.js/). If you use express,
this router should feel familiar.

``` javascript
const routes = [
  { path: '/', component: Home },
  { path: '/user/:id', component: User },
  { path: '/user/:id/edit', component: EditUser },
  { path: '/file/:file(*)', component: File },
  { path: /^\/commits\/(\d+)\.\.(\d+)/, component: Commits },
  { path: '*', component: NotFound }
]
```

Route information can be accessed via `props.route`

``` javascript
const User = ({route}) => <div>{route.params.id}</div>
```

### Navigation
``` javascript
import { navigate } from 'react-routify'
navigate('/about')
```
