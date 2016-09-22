import React from 'react'
import ReactDOM from 'react-dom'
import { ReduxRouter, routeReducer } from '../../../lib'
import { createStore, combineReducers } from 'redux'
import { Provider } from 'react-redux'

const rootReducer = combineReducers({
  route: routeReducer
})

const store = createStore(rootReducer, window.devToolsExtension && window.devToolsExtension())

const Home = () => <div>Home</div>
const About = () => <div>About</div>
const Users = () => <div>Users</div>

const routes = [
  { path: '/', component: Home },
  { path: '/about', component: About },
  { path: '/users/:id', component: Users }
]

const rootComponent = (
  <Provider store={store}>
    <div>
      <a href="/">Home</a>
      <a href="/about">About</a>
      <a href="/users/10">user 10</a>
      <ReduxRouter routes={routes} store={store} />
    </div>
  </Provider>
)

ReactDOM.render(
  rootComponent,
  document.getElementById('root')
)
