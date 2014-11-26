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

var CodePage = React.createClass({

  mixins: [Router.Navigation],

  render: function() {

    return (
        <div className="home-page-hero full-page-section ">
          <div className="full-page-section-center-content">
            <Headline headline="Code"
            subheadHtml={
              <p className="mui-font-style-headline"><a href="https://github.com/zhxnlai">A link to my github</a></p>}/>
          </div>
        </div>
    );
  },

});

module.exports = CodePage;
