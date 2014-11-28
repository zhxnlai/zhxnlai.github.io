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

var TrigVsDots = React.createClass({
  mixins: [Router.Navigation],

  render: function() {
    var appImagesClassName = "l-box pure-u-1 pure-u-sm-1-2";

    return (
      <div className="trig-vs-dots-page full-page-section pure-g">
        <div className="trig-vs-dots-hero pure-u-1 full-width-section">

            <img className="svg-logo" src="images/projects/trig-vs-dots/icon.png" />
            <div className="tagline">
              <h1 className="brand-name">Trig vs Dots</h1>
              <h2 className="mui-font-style-headline">
              The breath-taking challenge.
              </h2>
            </div>
        </div>

        <div className="trig-vs-dots-intro pure-u-1 full-width-section ">
        <div className=" full-width-section-content">
        <p>
        Prepare yourself for the breath-taking challenge: Tilt your phone to fly the trig, our last-one-standing hero, to dodge myriad of hostile dots come from all directions. Keep yourself alive as long as you are capable of.
        <br/><br/>Train your reflexivity as you make your way out of every critical and impossible situation.
        <br/><br/>Simple rule, tons of fun. Reflexion difference among people can narrow down to 1 millisecond. Prove yourself are better by beating your friend's time record.
        <br/><br/>Stay alert, stay sharp, and having fun!
        </p>
        </div>
        </div>

        <div className="trig-vs-dots-teaser pure-u-1 full-width-section ">
          <div className=" full-width-section-content">

          <video className="pure-u-1" controls>
          <source src="images/projects/trig-vs-dots/teaser.mp4" type="video/mp4"/>
          <source src="images/projects/trig-vs-dots/demo-2.mp4" type="video/mp4"/>
          Your browser does not support the video tag.
          </video>

          </div>
        </div>

        <div className="trig-vs-dots-demo pure-u-1 full-width-section ">
        <div className=" full-width-section-content">

        <div className="l-box pure-u-1 ">
        <h2 className="mui-font-style-headline">Demo</h2>
        </div>

        <div  className="l-box pure-u-1 ">
        <div className={appImagesClassName}>
        <video className="pure-u-1" autoPlay loop muted>
        <source src="images/projects/trig-vs-dots/demo-1.mp4" type="video/mp4"/>
        Your browser does not support the video tag.
        </video>
        </div>
        <div className={appImagesClassName}>
        <video className="pure-u-1" autoPlay loop muted>
        <source src="images/projects/trig-vs-dots/demo-2.mp4" type="video/mp4"/>
        Your browser does not support the video tag.
        </video>
        </div>
        </div>

        <div className=" l-box pure-u-1 ">
        <div className="smaller-width pure-u-1">
        <p>Download Trig vs Dots right now!</p>
        </div>
        </div>

        </div>
        </div>

        <div className="trig-vs-dots-gallery ">
        <div className="pure-u-1 full-width-section ">
        <div className="full-width-section-content ">

        <div className="pure-u-1-4">
        <video className="pure-u-1" autoPlay loop muted>
        <source src="images/projects/trig-vs-dots/v1/normal.mp4" type="video/mp4"/>
        Your browser does not support the video tag.
        </video>
        </div>
        <div className="pure-u-1-4">
        <video className="pure-u-1" autoPlay loop muted>
        <source src="images/projects/trig-vs-dots/v1/story.mp4" type="video/mp4"/>
        Your browser does not support the video tag.
        </video>
        </div>
        <div className="pure-u-1-4">
        <video className="pure-u-1" autoPlay loop muted>
        <source src="images/projects/trig-vs-dots/v1/extreme.mp4" type="video/mp4"/>
        Your browser does not support the video tag.
        </video>
        </div>
        <div className="pure-u-1-4">
        <video className="pure-u-1" autoPlay loop muted>
        <source src="images/projects/trig-vs-dots/v1/ripple.mp4" type="video/mp4"/>
        Your browser does not support the video tag.
        </video>
        </div>

        </div>
        </div>
        </div>


        <div className="trig-vs-dots-download pure-u-1 full-width-section">
          <div className="full-width-section-content">
          <h3>
          <span className="no-wrap">Love Trig vs Dots?</span> Download it <span className="no-wrap"> at the Appstore.</span>
          </h3>
          <PaperButton
            type={PaperButton.Types.RAISED}
            label="AppStore"
            href="https://itunes.apple.com/us/app/trig-vs-dots/id837383002?mt=8" />
          </div>
        </div>

        </div>

    );
  },

});

module.exports = TrigVsDots;
