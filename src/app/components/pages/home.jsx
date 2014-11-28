/**
* @jsx React.DOM
*/


// <h2 className="mui-font-style-headline">
// A CSS Framework and a Set of React Components <span className="no-wrap">that Implement</span> <span className="no-wrap">Google's Material Design</span>
// </h2>

var React = require('react'),
Router = require('react-router'),
mui = require('material-ui'),
Ripple = mui.Ripple,
DOM = require('../utils/dom.js'),
Feature = require('../components/feature.jsx'),
Headline = require('../components/headline.jsx'),
$ = require('jquery'),
Velocity = require('velocity-animate'),
PaperButton = mui.PaperButton,
Paper = mui.Paper;

var HomePage = React.createClass({
  mixins: [Router.Navigation],

  render: function() {
    return (
        <div className="home-page-hero full-page-section ">
          <div className="full-page-section-center-content">
            <Headline headline="Welcome" subhead="Maybe some WebGL..."/>
          </div>
        </div>
    );
  },
  elementRect: function(el) {
    var $el = $(el);
    var offset = $el.offset();

    var width = $el.width();
    var height = $el.height();

    var centerX = offset.left + width / 2;
    var centerY = offset.top + height / 2;

    return {x: centerX, y: centerY, w: width, h: height};
  },
  _onRippleClick: function(ref) {
    var el = this.refs[ref].getDOMNode();
    //animate the ripple
    this.refs.ripple.animateFromCenter();

    // var cx = this.getDOMNode().offsetWidth / 2,
    // cy = this.getDOMNode().offsetHeight / 2;
    var selfRect = this.elementRect(this.getDOMNode()),
    buttonRect = this.elementRect(el);

    var deltaX = selfRect.x-buttonRect.x;
    var deltaY = selfRect.y-buttonRect.y;
    var scale = Math.max(selfRect.w/buttonRect.w, selfRect.h/buttonRect.h)*1.5;

    var curve = [.51,.01,.34,1];
    Velocity(el, {
      // translateX: [deltaX, "easeOutSine"],
      // translateY: [deltaY, "easeInSine"],
      // scaleX: [scale/4, "easeOutSine"],
      // scaleY: [scale/4, "easeOutSine"],
      // scaleX: scale,
      // scaleY: scale,
      // scaleX: [scale, curve],
      // scaleY: [scale, curve],
    }, {
      duration:  200,
      complete: function(elements) {
        Velocity(el, {
          scaleX: [scale, curve],
          scaleY: [scale, curve],
        }, {
          duration:  300,
          complete: function(elements) {
          }
        });
      }
    });

    // //animate the zdepth change
    // if (this.props.type !== Types.FLAT) {
    //   this.setState({ zDepth: this.state.initialZDepth + 1 });
    //   CssEvent.onTransitionEnd(el, function() {
    //     this.setState({ zDepth: this.state.initialZDepth });
    //   }.bind(this));
    // }

  },

  _onDemoClick: function() {
    this.transitionTo('components');
  }

});

module.exports = HomePage;
