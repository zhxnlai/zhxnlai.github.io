/**
* @jsx React.DOM
*/


// <h2 className="mui-font-style-headline">
// A CSS Framework and a Set of React Components <span className="no-wrap">that Implement</span> <span className="no-wrap">Google's Material Design</span>
// </h2>

var React = require('react'),
Router = require('react-router'),
mui = require('material-ui'),
Headline = require('../components/headline.jsx'),
FeatureList = require('../components/feature-list.jsx'),
Feature = require('../components/feature.jsx');

//<span className="no-wrap">that Implement</span>
//<Headline headline="Code" subhead="“Software is like sex: it's better when it's free.”-Linus Torvalds" />

//                <p className="mui-font-style-title"><a href="https://github.com/zhxnlai">Checkout my Octocat</a></p>

// <img className="pure-img-responsive" src="https://octodex.github.com/images/dunetocat.png"/>

// pure-u-1 pure-u-sm-1 pure-u-md-1-2 pure-u-xl-1-3
//  pure-u-1 pure-u-sm-2-3 pure-u-md-1-2

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
