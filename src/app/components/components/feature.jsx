var React = require('react'),
Router = require('react-router'),
Link = Router.Link,
mui = require('material-ui'),
Paper = mui.Paper;

var Feature = React.createClass({

  propTypes: {
    heading: React.PropTypes.string,
    route: React.PropTypes.string,
    img: React.PropTypes.string
  },

  getInitialState: function() {
    return {
      zDepth: 1
    };
  },

  render: function() {
    return (
      <Paper className="catelog-feature" zDepth={this.state.zDepth}
      onMouseOver={this._onMouseOver} onMouseOut={this._onMouseOut} onClick={this._onClick}>
      <h3 className="catelog-feature-heading">{this.props.heading}</h3>
      <Link to={this.props.route}><img className="catelog-feature-image pure-img-responsive" src={this.props.img} /></Link>
      </Paper>
    );
  },
  _onClick: function() {
    this.props.onClick(this, this.props.heading);
  },
  _onMouseOver: function() {
    this.setState({
      zDepth: 4
    });
  },

  _onMouseOut: function() {
    this.setState({
      zDepth: 1
    });
  }

});

module.exports = Feature;
