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
  //
  // Buttons = require('./components/pages/components/buttons.jsx'),
  // Dialog = require('./components/pages/components/dialog.jsx'),
  // DropDownMenu = require('./components/pages/components/drop-down-menu.jsx'),
  // IconButtons = require('./components/pages/components/icon-buttons.jsx'),
  // Icons = require('./components/pages/components/icons.jsx'),
  // Inputs = require('./components/pages/components/inputs.jsx'),
  // LeftNav = require('./components/pages/components/left-nav.jsx'),
  // Menus = require('./components/pages/components/menus.jsx'),
  // Paper = require('./components/pages/components/paper.jsx'),
  // Switches = require('./components/pages/components/switches.jsx'),
  // Toolbars = require('./components/pages/components/toolbars.jsx'),

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
      <DefaultRoute handler={Home}/>
    </Route>
  // </Routes>
);

module.exports = AppRoutes;
