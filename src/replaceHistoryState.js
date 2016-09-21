const replaceHistoryState = path => {
  history.replaceState(history.state, null, path)
}

export default replaceHistoryState
