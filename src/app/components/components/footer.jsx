var React = require('react'),
mui = require('material-ui');

var Footer = React.createClass({

  propTypes: {
    title : React.PropTypes.string,
    onMenuIconClick: React.PropTypes.func,
    zDepth: React.PropTypes.number
  },

  getDefaultProps: function() {
    return {
      title: '',
      zDepth: 1
    };
  },
  render: function() {

    return (
      <div className="footer">
        <a href="mailto:zhxnlai@gmail.com">zhxnlai@gmail.com</a>
        <p>© 2014-2015 Zhixuan Lai</p>
      </div>
    );
  }

});

module.exports = Footer;
