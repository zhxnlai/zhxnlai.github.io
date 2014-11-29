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
  WebGLGlobe = require('./globe/webgl-globe.jsx'),
  IconButton = mui.IconButton;

  var ReactCSSTransitionGroup = React.addons.CSSTransitionGroup;
  var Router = require('react-router'),
  RouteHandler = Router.RouteHandler;

  var pageTitles = ["home", "apps", "games", "code", "about"];
  var pageIcons = ["action-home", "hardware-phone-iphone", "hardware-gamepad", "mui-icon-github", "action-info-outline"];

  // <div className={"webgl-globe "+globeClassName}>
  // <WebGLGlobe />
  // </div>

var Master = React.createClass({
  mixins: [Router.State],

  render: function() {
    var globeClassName = this.getPath()=="/home" ? "": "isHidden";
    console.log(this.getPath()+" classname: "+globeClassName)

    return (
      <AppCanvas className="master" predefinedLayout={0}>
        <Header pageTitles={pageTitles} pageIcons={pageIcons}/>
          <ReactCSSTransitionGroup transitionName="example">
            <RouteHandler key={this.getPath()} />
          </ReactCSSTransitionGroup>
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
