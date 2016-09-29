jest.mock('../store')

import React from 'react'
import renderer from 'react-test-renderer'
import Link from '../Link'
import store from '../store'

test('Link should render', () => {
  const link = <Link to="/nowhere" className="some-class" id="something" />
  const component = renderer.create(link)
  const tree = component.toJSON()
  expect(tree).toMatchSnapshot()
})

test('Link should apply activeClassName', () => {
  store.getPath.mockImplementation(() => {
    return '/nowhere'
  })

  const link = <Link to="/nowhere" activeClassName="active" id="something" />
  const component = renderer.create(link)
  const tree = component.toJSON()
  expect(tree).toMatchSnapshot()
})

test('Link should merge className and activeClassName', () => {
  store.getPath.mockImplementation(() => {
    return '/nowhere'
  })

  const link = <Link to="/nowhere" className="foo" activeClassName="active" id="something" />
  const component = renderer.create(link)
  const tree = component.toJSON()
  expect(tree).toMatchSnapshot()
})

test('Link should update active state onRouteChange', () => {
  const callbacks = []

  store.getPath.mockImplementation(() => {
    return '/foo'
  })

  store.addChangeListener.mockImplementation(callback => {
    callbacks.push(callback)
  })

  const ui = (
    <div>
      <Link to="/foo" activeClassName="active">foo</Link>
      <Link to="/bar" activeClassName="active">bar</Link>
    </div>
  )

  const changeRoute = path => {
    callbacks.forEach(callback => {
      callback({ path })
    })
  }

  const component = renderer.create(ui)

  const snap = () => {
    const tree = component.toJSON()
    expect(tree).toMatchSnapshot()
  }

  snap()
  changeRoute('/bar')
  snap()
  changeRoute('/foo')
  snap()
})
