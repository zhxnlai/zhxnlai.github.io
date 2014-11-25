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
  // AppLeftNav = require('./app-left-nav.jsx');
  var Router = require('react-router'),
  RouteHandler = Router.RouteHandler;

var Master = React.createClass({

  render: function() {
    return (
      <AppCanvas predefinedLayout={0}>


        <Header />
        <RouteHandler />

        <Footer />


      </AppCanvas>
    );
  },

  _onGithubTouchTap: function() {
    document.location.href='https://github.com/callemall/material-ui';
  },

  _onMenuIconButtonTouchTap: function() {
    this.refs.leftNav.toggle();
  }

});

module.exports = Master;
