/**
 * @jsx React.DOM
 */

var React = require('react'),
  mui = require('material-ui'),
  AppBar = mui.AppBar,
  AppCanvas = mui.AppCanvas,
  Menu = mui.Menu,
  Header = require('./components/header.jsx'),
  Footer = require('./components/footer.jsx'),
  IconButton = mui.IconButton;

var ReactCSSTransitionGroup = React.addons.CSSTransitionGroup;
var Router = require('react-router'),
RouteHandler = Router.RouteHandler;

var pages =[{title: "home", icon: "action-home"},
            {title: "research", icon: "social-school"},
            {title: "apps", icon: "hardware-phone-iphone"},
            {title: "games", icon: "hardware-gamepad"},
            {title: "code", icon: "mui-icon-github"},
            {title: "about", icon: "action-info-outline"}];

var Master = React.createClass({
  mixins: [Router.State],

  render: function() {
    var query = this.getQuery();
    var hideNav = query.hideNav !== undefined;
    return (
      <AppCanvas className="master" predefinedLayout={0}>
        <Header pages={pages} hide={hideNav}/>
          <ReactCSSTransitionGroup transitionName="example" component="div">
            <RouteHandler key={this.getPath()} />
          </ReactCSSTransitionGroup>
        <Footer hide={hideNav}/>
      </AppCanvas>
    );
  },
});

module.exports = Master;
