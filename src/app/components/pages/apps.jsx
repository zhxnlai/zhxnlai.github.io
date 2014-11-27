/**
 * @jsx React.DOM
 */

var React = require('react'),
  Router = require('react-router'),
  mui = require('material-ui'),
  Ripple = mui.Ripple,
  DOM = require('../utils/dom.js'),
  FeatureList = require('../components/feature-list.jsx'),
  Headline = require('../components/headline.jsx'),
  $ = require('jquery'),
  Velocity = require('velocity-animate'),
  PaperButton = mui.PaperButton,
  Paper = mui.Paper;

var features = [{heading: "Tickets Tonight", route: "apps", img:"http://placehold.it/320x320"},
                {heading: "Talkly", route: "talkly", img:"images/projects/talkly/icon.png"},
                {heading: "Murmur", route: "murmur", img:"images/projects/murmur/icon.png"},];

var AppPage = React.createClass({
  mixins: [Router.Navigation],
  render: function() {
    return (
      <div className="home-page-hero full-page-section ">
        <div className="full-page-section-center-content">
            <Headline headline="Apps"
            subheadHtml={
              <p className="mui-font-style-title">App is dead, <span className="no-wrap"> long live the service.</span></p>}/>

            <FeatureList features={features}/>
          </div>
      </div>
    );
  },
});

module.exports = AppPage;
