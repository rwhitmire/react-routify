import React from 'react'
import reducer from '../routeReducer'
import { changeLocation } from '../actionCreators'

test('location change should return default state', () => {
  const state = reducer(undefined, {})
  expect(state.path).toBe('/')
  expect(state._private).toEqual({})
})

test('location change should update context and component', () => {
  const TestComponent = () => <div></div>
  const action = changeLocation(TestComponent, { foo: 'bar' })
  const state = {path: '/', _private: {}}
  const nextState = reducer(state, action)
  expect(nextState.foo).toBe('bar')
  expect(nextState._private.component).toBe(TestComponent)
})
