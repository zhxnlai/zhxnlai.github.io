/**
* @jsx React.DOM
*/

var React = require('react');
var Router = require('react-router');
var mui = require('material-ui');
var Headline = require('../components/headline.jsx');
var FeatureList = require('../components/feature-list.jsx');

var features = [{heading: "Checkout my Octocat", url: "https://github.com/zhxnlai", img:"https://octodex.github.com/images/dunetocat.png"}];

var CodePage = React.createClass({

  mixins: [Router.Navigation],

  render: function() {

    return (
        <div className="full-page-section ">
          <div className="code full-page-section-center-content">
            <Headline headline="Code"
            subheadHtml={
            <p className="mui-font-style-title">“Software is like sex: it's better when it's free.”<span className="no-wrap"> - Linus Torvalds</span></p>}/>
            <FeatureList features={features}/>
          </div>
        </div>
    );
  },

});

module.exports = CodePage;
