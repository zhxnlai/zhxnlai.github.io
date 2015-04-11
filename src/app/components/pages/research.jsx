/**
 * @jsx React.DOM
 */

var React = require('react');
var Router = require('react-router');
var mui = require('material-ui');
var Headline = require('../components/headline.jsx');
var FeatureList = require('../components/feature-list.jsx');

var features = [{heading: "Prolog Visualizer", url: "https://prolog.firebaseapp.com/", img:"http://placehold.it/320x320"},
                {heading: "Printf Visualizer", url: "https://zhxnlai.github.io/printf/", img:"http://placehold.it/320x320"},
                {heading: "CamlBack", url: "https://camlback.github.io/", img:"http://placehold.it/320x320"},];

var ResearchPage = React.createClass({
  mixins: [Router.Navigation],
  render: function() {
    return (
      <div className="full-page-section">
        <div className="research full-page-section-center-content">
            <Headline
              headline="Research"
              subheadHtml={<p className="mui-font-style-title">Cool stuffs... <span className="no-wrap"></span></p>}/>
            <FeatureList features={features}/>
          </div>
      </div>
    );
  },
});

module.exports = ResearchPage;
