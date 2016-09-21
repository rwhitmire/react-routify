export const LOCATION_CHANGE = '@@router/LOCATION_CHANGE'
export function changeLocation(component, context) {
  return {
    type: LOCATION_CHANGE,
    _private: { component },
    context
  }
}
