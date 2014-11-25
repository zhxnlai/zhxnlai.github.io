var React = require('react'),
  mui = require('material-ui'),
  Paper = mui.Paper,
  PaperButton = mui.PaperButton;

var Header = React.createClass({

  propTypes: {
    title : React.PropTypes.string,
    onMenuIconClick: React.PropTypes.func,
    zDepth: React.PropTypes.number
  },

  getDefaultProps: function() {
    return {
      title: '',
      zDepth: 1
    }
  },
  _onRippleClick: function(ref) {

  },
  render: function() {


    return (
        <ul className="header">
        <li>
          <PaperButton className="demo-button" ref="app" type="FAB" icon="hardware-phone-iphone" onClick={this._onRippleClick.bind(this, "app")} />
        </li>
        <li>
          <PaperButton className="demo-button" ref="games" type="FAB" icon="hardware-gamepad" onClick={this._onRippleClick.bind(this, "games")} />
        </li>
        <li>
          <PaperButton className="demo-button" ref="code" type="FAB" icon="mui-icon-github" onClick={this._onRippleClick.bind(this, "code")} />
        </li>
        <li>
          <PaperButton className="github-button" ref="about" type="FAB" icon="action-info-outline" onClick={this._onRippleClick.bind(this, "about")} />
        </li>

        </ul>
    );
  }

});

module.exports = Header;
