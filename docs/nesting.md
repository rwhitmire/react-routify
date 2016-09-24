# Nesting

One of the greatest features React has to offer is composability. The primary focus of React Routify is to avoid domain specific language and opinions. Rather than using a React Routify API for nesting (there is none), take advantage of higher order components.

```js
const Admin = Child => props => {
  return (
    <div>
      <div>
        admin menu
      </div>
      <Child {...props} />
    </div>
  )
}

const Users = props => <div>users</div>
const Settings = props => <div>settings</div>

const routes = [
  { path: '/admin/users', component: Admin(Users) },
  { path: '/admin/settings', component: Admin(Settings) }
]
```
