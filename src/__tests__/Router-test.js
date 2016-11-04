jest.mock('../createRoute')
jest.mock('../beginRouting')

import React from 'react'
import renderer from 'react-test-renderer'
import Router from '../Router'
import createRoute from '../createRoute'
import beginRouting from '../beginRouting'

test('default state should render null', () => {
  const Home = () => <div>home</div>
  const routes = [{ path: '/', component: Home }]
  const component = renderer.create(<Router routes={routes} />)
  const tree = component.toJSON()
  expect(tree).toMatchSnapshot()
})

test('beginRouting should be called', () => {
  const Home = () => <div>home</div>
  const routes = [{ path: '/', component: Home }]
  renderer.create(<Router routes={routes} />)
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

  const component = renderer.create(<Router routes={routes} />)

  let tree

  createRouteCallbacks['/']()
  tree = component.toJSON()
  expect(tree).toMatchSnapshot()

  createRouteCallbacks['/about']()
  tree = component.toJSON()
  expect(tree).toMatchSnapshot()
})

test('route information should exist on props', () => {
  const createRouteCallbacks = {}

  createRoute.mockImplementation((path, callback) => {
    createRouteCallbacks[path] = callback
  })

  const Home = ({ route }) => <div>{route.params.info}</div>

  const routes = [
    { path: '/', component: Home },
  ]

  const component = renderer.create(<Router routes={routes} />)

  createRouteCallbacks['/']({params: {info: 'shinfo'}})
  const tree = component.toJSON()
  expect(tree).toMatchSnapshot()
})
