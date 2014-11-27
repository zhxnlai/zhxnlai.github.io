/**
* @jsx React.DOM
*/

var React = require('react'),
mui = require('material-ui'),
Paper = mui.Paper;

var Headline = React.createClass({
  render: function() {
      var subhead = (this.props.subheadHtml ? this.props.subheadHtml :
        (<p className="mui-font-style-title">{this.props.subhead}</p>));
      return (
        <div className="headline l-box-lrg-top pure-g">
          <div className="l-box pure-u-1">
            <h1 className="mui-font-style-display-1">{this.props.headline}</h1>
            {subhead}
          </div>
        </div>
      );
    },
  });

  module.exports = Headline;
