import React from 'react'
import reducer from '../routeReducer'
import { changeLocation } from '../actionCreators'

test('location change should return default state', () => {
  const state = reducer(undefined, {})
  expect(state.context).toBeNull()
  expect(state._private).toEqual({})
})

test('location change should update context and component', () => {
  const TestComponent = () => <div></div>
  const action = changeLocation(TestComponent, { foo: 'bar' })
  const state = {context: null, _private: {}}
  const nextState = reducer(state, action)
  expect(nextState.context.foo).toBe('bar')
  expect(nextState._private.component).toBe(TestComponent)
})

