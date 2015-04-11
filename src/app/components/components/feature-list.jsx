/**
* @jsx React.DOM
*/

var React = require('react'),
Router = require('react-router'),
mui = require('material-ui'),
Feature = require('../components/feature.jsx');

var FeatureList = React.createClass({
  mixins: [Router.Navigation],
  render: function() {
    var featuresDivs = this.props.features.map(function(feature) {
      return (
        <div className="l-box pure-u-1 pure-u-sm-1 pure-u-md-1-2 pure-u-xl-1-3">
          <Feature ref={feature.heading} heading={feature.heading} url={feature.url} route={feature.route} img={feature.img} />
        </div>);
      }, this);
      
    return (
      <div className="feature-list l-box-lrg-bottom pure-g">
        <div className="pure-u-1">
        </div>
        {featuresDivs}
      </div>
    );
  },
});

module.exports = FeatureList;
