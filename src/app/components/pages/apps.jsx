/**
 * @jsx React.DOM
 */

var React = require('react'),
  Router = require('react-router'),
  mui = require('material-ui'),
  Ripple = mui.Ripple,
  DOM = require('../utils/dom.js'),
  Feature = require('../components/feature.jsx'),
  Catelog = require('../components/catelog.jsx'),
  Headline = require('../components/headline.jsx'),
  $ = require('jquery'),
  Velocity = require('velocity-animate'),
  PaperButton = mui.PaperButton,
  Paper = mui.Paper;

var features = [{heading: "Tickets Tonight", route: "home", img:"http://placehold.it/320x320"},
                {heading: "Talkly", route: "home", img:"images/apps/talkly-icon.png"},
                {heading: "Murmur", route: "home", img:"images/apps/murmur-icon.png"},];

var AppPage = React.createClass({
  mixins: [Router.Navigation],
  render: function() {
    return (
      <div className="home-page-hero full-page-section ">
        <div className="full-page-section-center-content">
            <Headline headline="Apps" subhead="Social networking apps."/>
            <Catelog features={features}/>
          </div>
      </div>
    );
  },
});

module.exports = AppPage;
