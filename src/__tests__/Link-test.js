import React from 'react'
import renderer from 'react-test-renderer'
import Link from '../Link'

test('Link should render', () => {
  const link = <Link to="/nowhere" className="some-class" id="something" />
  const component = renderer.create(link)
  const tree = component.toJSON()
  expect(tree).toMatchSnapshot()
})
