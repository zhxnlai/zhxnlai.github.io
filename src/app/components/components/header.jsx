var React = require('react'),
  Router = require('react-router'),
  mui = require('material-ui'),
  Paper = mui.Paper,
  PaperButton = mui.PaperButton;


var Header = React.createClass({
  mixins: [Router.Navigation, Router.State],

  getInitialState: function() {
    return {curPageIndex: 0};
  },

  _onButtonClick: function(ref, i) {
      this.transitionTo(ref);
  },
  render: function() {
    var pageButtons = this.props.pageTitles.map(function(pageTitle, i) {
      return (
        <li>
        <PaperButton className="demo-button" key={pageTitle} ref={pageTitle} primary={this.isActive(pageTitle)} type="FAB" icon={this.props.pageIcons[i]} onClick={this._onButtonClick.bind(this, pageTitle, i)}/>
        </li>
      )
    }, this)

    return (
        <ul className="header">
        {pageButtons}

        </ul>
    );
  },



});

module.exports = Header;
