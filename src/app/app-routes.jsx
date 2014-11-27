/**
 * @jsx React.DOM
 */

var React = require('react'),
  Router = require('react-router'),
  Route = Router.Route,
  Routes = Router.Routes,
  Redirect = Router.Redirect,
  DefaultRoute = Router.DefaultRoute,

  Master = require('./components/master.jsx'),
  Home = require('./components/pages/home.jsx'),
  Apps = require('./components/pages/apps.jsx'),
  Games = require('./components/pages/games.jsx'),
  Code = require('./components/pages/code.jsx'),
  About = require('./components/pages/about.jsx'),
  // GetStarted = require('./components/pages/get-started.jsx'),
  // PageWithNav = require('./components/pages/page-with-nav.jsx'),
  //
  // Colors = require('./components/pages/css-framework/colors.jsx'),
  // Typography = require('./components/pages/css-framework/typography.jsx'),

  // projects
  Talkly = require('./components/pages/projects/talkly.jsx'),
  Murmur = require('./components/pages/projects/murmur.jsx'),
  Intersolar = require('./components/pages/projects/intersolar.jsx'),
  Horoscoper = require('./components/pages/projects/horoscoper.jsx'),
  Spacinarium = require('./components/pages/projects/spacinarium.jsx'),
  TimidTurtle = require('./components/pages/projects/timid-turtle.jsx'),
  TrigVsDots = require('./components/pages/projects/trig-vs-dots.jsx'),

  cssFrameworkMenuItems = [
    { route: 'colors', text: 'Colors'},
    { route: 'typography', text: 'Typography'}
  ],

  componentsMenuItems = [
    { route: 'buttons', text: 'Buttons'},
    { route: 'dialog', text: 'Dialog'},
    { route: 'dropdown-menu', text: 'Dropdown Menu'},
    { route: 'icon-buttons', text: 'Icon Buttons'},
    { route: 'icons', text: 'Icons'},
    { route: 'inputs', text: 'Inputs'},
    { route: 'menus', text: 'Menus'},
    { route: 'left-nav', text: 'Left Nav'},
    { route: 'paper', text: 'Paper'},
    { route: 'switches', text: 'Switches'},
    //{ route: 'toasts', text: 'Toasts'},
    { route: 'toolbars', text: 'Toolbars'},
  ];

var AppRoutes = (
  // <Routes scrollBehavior="scrollToTop">
    <Route name="root" path="/" handler={Master}  >
      <Route name="home" handler={Home} />
      <Route name="apps" handler={Apps} />
      <Route name="games" handler={Games} />
      <Route name="code" handler={Code} />
      <Route name="about" handler={About} />

      <Route name="talkly" handler={Talkly} />
      <Route name="murmur" handler={Murmur} />
      <Route name="intersolar" handler={Intersolar} />
      <Route name="horoscoper" handler={Horoscoper} />
      <Route name="spacinarium" handler={Spacinarium} />
      <Route name="timid-turtle" handler={TimidTurtle} />
      <Route name="trig-vs-dots" handler={TrigVsDots} />

      <Redirect from="*" to="home" />
    </Route>
  // </Routes>
);
//      <DefaultRoute handler={Home}/>


module.exports = AppRoutes;
