import React from 'react';
import ReactDOM from 'react-dom';
import { Router } from '../../../lib';
import Layout from './Layout';
import TwoColumnLayout from './TwoColumnLayout';

const Home = () => <div>Home</div>;
const About = () => <div>About</div>;
const Sidebar = () => <div>Sidebar</div>;
const Users = () => <div>Users</div>;

const routes = [
  { path: '/', component: Layout(Home) },
  { path: '/about', component: Layout(About) },
  { path: '/users/:id', component: TwoColumnLayout({ Main: Users, Side: Sidebar}) }
];

const rootComponent = (
  <Router routes={routes} />
);

ReactDOM.render(
  rootComponent,
  document.getElementById('root')
);
