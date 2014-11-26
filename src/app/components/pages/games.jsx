/**
* @jsx React.DOM
*/


// <h2 className="mui-font-style-headline">
// A CSS Framework and a Set of React Components <span className="no-wrap">that Implement</span> <span className="no-wrap">Google's Material Design</span>
// </h2>

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

var features = [{heading: "Intersolar", route: "home", img:"http://placehold.it/320x320"},
                {heading: "Horoscoper", route: "home", img:"http://placehold.it/320x320"},
                {heading: "Spacinarium", route: "home", img:"http://placehold.it/320x320"},
                {heading: "Timid Turtle", route: "home", img:"http://placehold.it/320x320"},
                ];

var GamesPage = React.createClass({

  mixins: [Router.Navigation],

  render: function() {
    return (
        <div className="home-page-hero full-page-section ">
          <div className="full-page-section-center-content">
            <Headline headline="Games" subhead="Fun is important."/>
            <Catelog features={features}/>
          </div>
        </div>
    );
  },
});

module.exports = GamesPage;
