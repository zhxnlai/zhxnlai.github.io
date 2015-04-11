/**
* @jsx React.DOM
*/

var React = require('react');
var Router = require('react-router');
var mui = require('material-ui');
var Headline = require('../components/headline.jsx');
var FeatureList = require('../components/feature-list.jsx');

// <div className="pure-u-1-2">
// <img className="pure-img-responsive" src="http://thecomputerboys.com/wp-content/uploads/2011/01/datamation-1965-well-dressed-programmer.png"/>
// </div>

// <div className="l-box pure-u-1-2">
// <h2 className="mui-font-style-headline">Gadgets</h2>
// <ul>
// <li className="mui-font-style-title">ie800</li>
// <li className="mui-font-style-title">...</li>
// </ul>
// </div>

var AboutPage = React.createClass({
  mixins: [Router.Navigation],
  render: function() {
    return (
        <div className="full-page-section">
          <div className="about full-page-section-center-content">
            <Headline headline="About"
            subheadHtml={
              <p className="mui-font-style-title">I am a third-year computer science student at UCLA.
              <br/> I love startup culture and in summer 2014, I co-founded <a href="http://axcelstudio.com">axcelstudio</a>.
              <br/> In my spare time, I cook and code.</p>}/>
            <div className="l-box-lrg-bottom pure-g">
            </div>
          </div>
        </div>
    );
  },

});

module.exports = AboutPage;
