/**
 * @jsx React.DOM
 */

var React = require('react'),
  Router = require('react-router'),
  mui = require('material-ui'),
  Ripple = mui.Ripple,
  DOM = require('../utils/dom.js'),
  Feature = require('../components/feature.jsx'),
  $ = require('jquery'),
  Velocity = require('velocity-animate'),
  PaperButton = mui.PaperButton,
  Paper = mui.Paper;
  // HomeFeature = require('./home-feature.jsx');

var AppPage = React.createClass({

  mixins: [Router.Navigation],

  render: function() {



    return (
      <div className="mui-app-content-canvas">

        <div className="home-page-hero full-page-section ">
          <div className="full-page-section-center-content">

            <div className="catelog l-box-lrg pure-g">
                <div className="l-box pure-u-1">
                <h1 className="mui-font-style-display-3">Apps</h1>
                <p className="mui-font-style-headline">Fun is important.</p>
                </div>

                <div className="l-box pure-u-1 pure-u-sm-1-2 pure-u-md-1-3">
                  <Feature heading="Get Started" route="home" img="images/get-started.svg" />
                </div>
                <div className="l-box pure-u-1 pure-u-sm-1-2 pure-u-md-1-3">
                  <Feature heading="Get Started" route="home" img="images/get-started.svg" />
                </div>

                <div className="l-box pure-u-1 pure-u-sm-1-2 pure-u-md-1-3">
                  <Feature heading="Get Started" route="home" img="images/get-started.svg" />
                </div>

              </div>
            </div>
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

module.exports = AppPage;
