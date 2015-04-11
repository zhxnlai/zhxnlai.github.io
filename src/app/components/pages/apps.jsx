/**
 * @jsx React.DOM
 */

var React = require('react');
var Router = require('react-router');
var mui = require('material-ui');
var Headline = require('../components/headline.jsx');
var FeatureList = require('../components/feature-list.jsx');

var features = [{heading: "Tickets Tonight", url: "https://github.com/zhxnlai/TicketsTonight", img:"http://placehold.it/320x320"},
                {heading: "Talkly", route: "talkly", img:"images/projects/talkly/icon.png"},
                {heading: "Murmur", route: "murmur", img:"images/projects/murmur/icon.png"},];

var AppPage = React.createClass({
  mixins: [Router.Navigation],
  render: function() {
    return (
      <div className="full-page-section">
        <div className="apps full-page-section-center-content">
            <Headline
              headline="Apps"
              subheadHtml={<p className="mui-font-style-title">App is dead, <span className="no-wrap"> long live the service.</span></p>}/>
            <FeatureList features={features}/>
          </div>
      </div>
    );
  },
});

module.exports = AppPage;
