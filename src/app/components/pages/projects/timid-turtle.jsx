/**
* @jsx React.DOM
*/

var React = require('react'),
Router = require('react-router'),
mui = require('material-ui'),
Ripple = mui.Ripple,
DOM = require('../../utils/dom.js'),
Feature = require('../../components/feature.jsx'),
Headline = require('../../components/headline.jsx'),
PaperButton = mui.PaperButton,
Paper = mui.Paper;

var TimidTurtle = React.createClass({
  mixins: [Router.Navigation],

  render: function() {
    return (
      <div className="talkly-page full-page-section pure-g">
        <div className="takly-hero pure-u-1 full-width-section">
            <img className="svg-logo" src="images/apps/talkly-icon.png" />
            <div className="tagline">
              <h1 className="brand-name">Talkly</h1>
              <h2 className="mui-font-style-headline">
              Give Your Message A Voice. <br/> StartupUCLA incubated.
              </h2>
            </div>
        </div>

        <div className="talkly-description pure-u-1 full-width-section ">
        <p className=" full-width-section-content">Talkly is an asynchronous voice-messaging app
        that combines the power of voice and convenience of text in a frictionless way.
        Unlike Whatsapp and other IM apps, only Talkly’s voice-centric focus provides an
        extremely simple yet friendly voice messaging experience.
        </p>
        </div>

        <div className="pure-u-1 full-width-section ">
          <p className=" full-width-section-content">Talkly is an asynchronous voice-messaging app
          that combines the power of voice and convenience of text in a frictionless way.
          Unlike Whatsapp and other IM apps, only Talkly’s voice-centric focus provides an
          extremely simple yet friendly voice messaging experience.
          </p>
        </div>


        <div className="talkly-download pure-u-1 full-width-section">
          <div className="full-width-section-content">
          <h3>
            Love this <span className="no-wrap">awesome idea?</span> <span className="no-wrap">Download at Appstore.</span>
          </h3>
          <PaperButton
            type={PaperButton.Types.RAISED}
            label="AppStore"
            href="https://github.com/callemall/material-ui" />
          </div>
        </div>

        </div>

    );
  },

});

module.exports = TimidTurtle;
