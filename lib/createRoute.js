import page from 'page'

const createRoute = (path, handler) => {
  page(path, handler)
}

export default createRoute
