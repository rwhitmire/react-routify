# Route Patterns

This library is an abstraction over [page.js](https://visionmedia.github.io/page.js/). If you use express,
this router should feel familiar.

```js
const routes = [
  { path: '/', component: Home },
  { path: '/user/:id', component: User },
  { path: '/user/:id/edit', component: EditUser },
  { path: '/file/:file(*)', component: File },
  { path: /^\/commits\/(\d+)\.\.(\d+)/, component: Commits },
  { path: '*', component: NotFound }
]
```
