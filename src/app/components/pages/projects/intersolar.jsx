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

var Intersolar = React.createClass({
  mixins: [Router.Navigation],

  render: function() {
    return (
      <div className="intersolar-page full-page-section pure-g">

        <div className="intersolar-hero pure-u-1 full-width-section">
            <div className="tagline">
              <h1 className="brand-name">Intersolar</h1>
              <h2 className="mui-font-style-headline">
              Immersive solar system.
              </h2>
            </div>
        </div>

        <div className=" pure-u-1 full-width-section ">
        <p className=" full-width-section-content">Inspired by the movie Interstellar, we created this virtual solar system within the Oculus Rift. Many people dream of traveling between planet and galaxy, but the reality cannot give them that opportunity. Oculus Rift provides a perfect immersing platform for this virtual reality.

        We used the Myo by Thalmic Labs as gesture control to control the movement of the camera and the time travel of the entire galaxy. Starting with a view of the solar system in the galaxy, users can travel to a planet and switch their view to the stars instead of the solar system. A laser beam is also displayed to help the users to distinguish which constellations they are looking at.
        </p>

        </div>

        <div className=" pure-u-1 full-width-section ">
          <div className=" full-width-section-content">
            <div className="tweet-box">
              <blockquote className="twitter-tweet" lang="en"><p><a href="https://twitter.com/hashtag/myo?src=hash">#myo</a> + <a href="https://twitter.com/oculus">@oculus</a> + astronomy = Intersolar, a hack that lets you zoom through the solar system! <a href="https://twitter.com/hashtag/HackSC?src=hash">#HackSC</a> <a href="http://t.co/zBeISl8Uhs">pic.twitter.com/zBeISl8Uhs</a></p>&mdash; HackSC (@gohacksc) <a href="https://twitter.com/gohacksc/status/531530456252952577">November 9, 2014</a></blockquote>
              <script async src="//platform.twitter.com/widgets.js" charset="utf-8"></script>
            </div>
          </div>
        </div>



        </div>

    );
  },

});

module.exports = Intersolar;
