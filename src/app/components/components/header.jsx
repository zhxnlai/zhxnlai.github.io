var React = require('react'),
  Router = require('react-router'),
  mui = require('material-ui'),
  Paper = mui.Paper,
  PaperButton = mui.PaperButton;
var Link = Router.Link;

var Header = React.createClass({
  mixins: [Router.Navigation, Router.State],

  getInitialState: function() {
    return {curPageIndex: 0};
  },

  _onButtonClick: function(ref, i) {
      this.transitionTo(ref);
  },

  render: function() {
    var pageButtons = this.props.pages.map(function(page, i) {
      return (
        <li key={i}>
          <Link className="pageTitle" to={page.title} title={page.title}>{page.title}</Link>
          <PaperButton className="demo-button" key={page.title} ref={page.title} primary={this.isActive(page.title)} type="FAB" icon={page.icon} onClick={this._onButtonClick.bind(this, page.title, i)}/>
        </li>
      );
    }, this);

    return (
      <header className="header">
        <nav>
          <ul>
          {pageButtons}
          </ul>
        </nav>
      </header>
    );
  },



});

module.exports = Header;
