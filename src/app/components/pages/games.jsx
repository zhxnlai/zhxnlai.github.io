/**
* @jsx React.DOM
*/

var React = require('react'),
Router = require('react-router'),
mui = require('material-ui'),
FeatureList = require('../components/feature-list.jsx'),
Headline = require('../components/headline.jsx');

var features = [{heading: "Intersolar", route: "intersolar", img:"images/projects/intersolar/feature-cropped.png"},
                {heading: "Horoscoper", route: "horoscoper", img:"images/projects/horoscoper/feature.png"},
                {heading: "Spacinarium", route: "spacinarium", img:"images/projects/spacinarium/feature-cropped.png"},
                {heading: "Timid Turtle", route: "timid-turtle", img:"images/projects/timid-turtle/icon.png"},
                {heading: "Trig vs Dots", route: "trig-vs-dots", img:"images/projects/trig-vs-dots/icon.png"},
                ];

var GamesPage = React.createClass({

  mixins: [Router.Navigation],

  render: function() {
    return (
        <div className="home-page-hero full-page-section ">
          <div className="full-page-section-center-content">
            <Headline headline="Games" subhead="Fun is important."/>
            <FeatureList features={features}/>
          </div>
        </div>
    );
  },
});

module.exports = GamesPage;
