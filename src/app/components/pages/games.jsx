/**
* @jsx React.DOM
*/

var React = require('react'),
Router = require('react-router'),
mui = require('material-ui'),
FeatureList = require('../components/feature-list.jsx'),
Headline = require('../components/headline.jsx');

var features = [{heading: "Intersolar", route: "intersolar", img:"http://placehold.it/320x320"},
                {heading: "Horoscoper", route: "horoscoper", img:"http://placehold.it/320x320"},
                {heading: "Spacinarium", route: "spacinarium", img:"http://placehold.it/320x320"},
                {heading: "Timid Turtle", route: "timid-turtle", img:"http://placehold.it/320x320"},
                {heading: "Trig vs Dots", route: "trig-vs-dots", img:"http://placehold.it/320x320"},
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
