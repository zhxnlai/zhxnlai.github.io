/**
* @jsx React.DOM
*/


// <h2 className="mui-font-style-headline">
// A CSS Framework and a Set of React Components <span className="no-wrap">that Implement</span> <span className="no-wrap">Google's Material Design</span>
// </h2>

var React = require('react'),
Router = require('react-router'),
mui = require('material-ui'),
Headline = require('../components/headline.jsx');

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

        <div className=" full-page-section ">
          <div className="about-page full-page-section-center-content">
            <Headline headline="About"
            subheadHtml={
              <p className="mui-font-style-title">I am a computer science student at UCLA.
              <br/> I love startup culture. In summer 2014, I co-founded <a href="http://axcelstudio.com">axcelstudio</a>.
              <br/> In my spare time, I cook and code.</p>}/>
            <div className="l-box-lrg-bottom pure-g">


            </div>
          </div>
        </div>
    );
  },

});

module.exports = AboutPage;
