# Nesting

One of the greatest features React has to offer is composability. The primary focus of React Routify is to avoid domain specific language and opinions. Rather than using a React Routify API for nesting (there is none), take advantage of higher order components.

```js
// This will be the base layout.
const Layout = ( Content ) => {
  return ( props ) => {
    return (
      <div>
        <header>
          Logo and stuff...
        </header>
        <Content {...props} />
      </div>
    );
  };
};

/* 
 * This is the sub layout. Here we can setup as many columns 
 * or admin specific customizations as needed. This one just 
 * happens to take a Sidebar and Content components.
 */ 
const AdminLayout = ({ Sidebar, Content }) => {
  return Layout(( props ) => {
    return (
      <div>
        <nav>
          <Sidebar />
        </nav>
        <section>
          <Content {...props} />
        </section>
      </div>
    );
  });
};

const Home = props => <div>home</div>;

const Users = props => <div>users</div>;
const UsersSidebar = props => <div>users sidebar</div>;

const Settings = props => <div>settings</div>;
const SettingsSidebar = props => <div>settings sidebar</div>;

const routes = [
  { 
    path: '/admin/', 
    component: Layout(Home) 
  },
  { 
    path: '/admin/users', 
    component: AdminLayout({ 
      Sidebar: UsersSidebar, 
      Content: Users 
    }) 
  },
  { 
    path: '/admin/settings', 
    component: AdminLayout({ 
      Sidebar: SettingsSidebar, 
      Content: Settings 
    }) 
  }
];
```
