/**
* @jsx React.DOM
*/

var React = require('react');
var Router = require('react-router');
var mui = require('material-ui');
var Headline = require('../components/headline.jsx');
var FeatureList = require('../components/feature-list.jsx');

var HomePage = React.createClass({
  mixins: [Router.Navigation],

  render: function() {
    return (
        <div className="home-page full-page-section ">
          <div className="full-page-section-center-content">
            <Headline headline="Welcome" subhead="This is Zhixuan Lai's portfolio site."/>
          </div>
        </div>
    );
  },
});

module.exports = HomePage;
