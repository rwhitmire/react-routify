# Redux

React Routify supports Redux out of the box.

```js
import React from 'react'
import ReactDOM from 'react-dom'
import { ReduxRouter, routeReducer } from 'react-router'
import { createStore, combineReducers } from 'redux'
import { Provider } from 'react-redux'

const rootReducer = combineReducers({
  route: routeReducer // property must be named `route`
})

const store = createStore(rootReducer)

const Home = () => <div>Home</div>
const About = () => <div>About</div>

const routes = [
  { path: '/', component: Home },
  { path: '/about', component: About }
]

const rootComponent = (
  <Provider store={store}>
    <ReduxRouter routes={routes} store={store} />
  </Provider>
)

ReactDOM.render(
  rootComponent,
  document.getElementById('root')
)
```

Route information is now available on `store.route`.
