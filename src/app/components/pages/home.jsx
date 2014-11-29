/**
* @jsx React.DOM
*/

var React = require('react'),
Router = require('react-router'),
mui = require('material-ui'),
Headline = require('../components/headline.jsx'),
PaperButton = mui.PaperButton,
Paper = mui.Paper;

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
