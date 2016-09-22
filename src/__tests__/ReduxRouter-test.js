jest.mock('../createRoute')
jest.mock('../beginRouting')
jest.mock('../replaceHistoryState')

import { createStore, combineReducers } from 'redux'
import React from 'react'
import renderer from 'react-test-renderer'
import ReduxRouter from '../ReduxRouter'
import createRoute from '../createRoute'
import beginRouting from '../beginRouting'
import replaceHistoryState from '../replaceHistoryState'
import routeReducer from '../routeReducer'
import { changeLocation } from '../actionCreators'

const createTestStore = () => {
  return  createStore(combineReducers({
    route: routeReducer
  }))
}

test('default state should render null', () => {
  const Home = () => <div>home</div>
  const routes = [{ path: '/', component: Home }]

  const component = renderer.create(
    <ReduxRouter routes={routes} store={createTestStore()} />
  )

  const tree = component.toJSON()
  expect(tree).toMatchSnapshot()
})

test('beginRouting should be called', () => {
  const Home = () => <div>home</div>
  const routes = [{ path: '/', component: Home }]
  renderer.create(<ReduxRouter routes={routes} store={createTestStore()} />)
  expect(beginRouting).toBeCalled()
})

test('navigate should update the component', () => {
  const createRouteCallbacks = {}

  createRoute.mockImplementation((path, callback) => {
    createRouteCallbacks[path] = callback
  })

  const Home = () => <div>home</div>
  const About = () => <div>about</div>

  const routes = [
    { path: '/', component: Home },
    { path: '/about', component: About }
  ]

  const component = renderer.create(
    <ReduxRouter routes={routes} store={createTestStore()} />
  )

  let tree

  createRouteCallbacks['/']({path: '/'})
  tree = component.toJSON()
  expect(tree).toMatchSnapshot()

  createRouteCallbacks['/about']({path: '/about'})
  tree = component.toJSON()
  expect(tree).toMatchSnapshot()
})

test('route information should exist on store', () => {
  const createRouteCallbacks = {}

  createRoute.mockImplementation((path, callback) => {
    createRouteCallbacks[path] = callback
  })

  const Home = () => <div>Home</div>
  const routes = [{ path: '/', component: Home }]
  const store = createTestStore()

  renderer.create(
    <ReduxRouter routes={routes} store={store} />
  )

  createRouteCallbacks['/']({path: '/about'})
  expect(store.getState().route.path).toBe('/about')
})

test('state updates should trigger replaceHistoryState', () => {
  const Home = () => <div>Home</div>
  const routes = [{ path: '/', component: Home }]
  const store = createTestStore()

  renderer.create(
    <ReduxRouter routes={routes} store={store} />
  )

  store.dispatch(changeLocation(Home, {}))
  expect(replaceHistoryState).toBeCalled()
})
