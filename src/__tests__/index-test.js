import {
  Router,
  ReduxRouter,
  navigate,
  routeReducer
} from '../index'

test('modules should be exported', () => {
  expect(Router).toBeDefined()
  expect(ReduxRouter).toBeDefined()
  expect(navigate).toBeDefined()
  expect(routeReducer).toBeDefined()
})
