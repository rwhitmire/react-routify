import page from 'page'
import { EventEmitter } from 'events'
import getCurrentPath from './getCurrentPath'

const CHANGE_EVENT = 'CHANGE_EVENT'

class Store extends EventEmitter {
  constructor() {
    super()
    this.ctx = { path: getCurrentPath() }

    page('*', (ctx, next) => {
      this.emitChange(ctx)
      next()
    })
  }

  getPath() {
    return this.ctx.path
  }

  emitChange(ctx) {
    this.ctx = { path: ctx.path }
    this.emit(CHANGE_EVENT, ctx)
  }

  addChangeListener(callback) {
    this.on(CHANGE_EVENT, callback)
  }

  removeChangeListener(callback) {
    this.removeListener(CHANGE_EVENT, callback)
  }
}

export default new Store()
