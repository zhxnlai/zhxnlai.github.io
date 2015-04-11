/**
 * @jsx React.DOM
 */

var React = require('react');
var Router = require('react-router');
var Route = Router.Route;
var Routes = Router.Routes;
var Redirect = Router.Redirect;
var DefaultRoute = Router.DefaultRoute;

var Master = require('./components/master.jsx');
var Home = require('./components/pages/home.jsx');
var Research = require('./components/pages/research.jsx');
var Apps = require('./components/pages/apps.jsx');
var Games = require('./components/pages/games.jsx');
var Code = require('./components/pages/code.jsx');
var About = require('./components/pages/about.jsx');

// projects
var Talkly = require('./components/pages/projects/talkly.jsx');
var Murmur = require('./components/pages/projects/murmur.jsx');
var Intersolar = require('./components/pages/projects/intersolar.jsx');
var Horoscoper = require('./components/pages/projects/horoscoper.jsx');
var Spacinarium = require('./components/pages/projects/spacinarium.jsx');
var TimidTurtle = require('./components/pages/projects/timid-turtle.jsx');
var TrigVsDots = require('./components/pages/projects/trig-vs-dots.jsx');

var AppRoutes = (
  // <Routes scrollBehavior="scrollToTop">
    <Route name="root" path="/" handler={Master}  >
      <Route name="home" handler={Home} />
      <Route name="research" handler={Research} />
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
