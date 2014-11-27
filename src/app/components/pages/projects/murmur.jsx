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

var Murmur = React.createClass({
  mixins: [Router.Navigation],

  render: function() {
    var appImagesClassName = "l-box pure-u-1 pure-u-sm-1-2";
    var appThumbnailsClassName = "l-box pure-u-1-4";

    return (
      <div className="murmur-page full-page-section pure-g">
        <div className="murmur-hero pure-u-1 full-width-section">
            <img className="svg-logo" src="images/projects/murmur/icon.png" />
            <div className="tagline">
              <h1 className="brand-name">Murmur</h1>
              <h2 className="mui-font-style-headline">
              Share Your Secrets With Voice.
              </h2>
            </div>
        </div>

        <div className="murmur-intro pure-u-1 full-width-section ">
        <div className="full-width-section-content ">
        <h2 className="l-box">A voice-based anonymous social network. </h2>
        <p className="l-box">We realize that every one has stressful feelings and secrets hard to share with people around, but internally we crave for a release and understanding from others. Murmur brings a new dimension to this confessional experience with voice. When you share your stories, your feelings and your secrets with Murmur, it not only conveys the content, but also the emotions, feelings, and even cultures behind. It brings an intimacy and humanity to the communication and help those who truly need.
        </p>
        </div>
        </div>



        <div className="murmur-features pure-u-1 full-width-section ">
        <div className="full-width-section-content ">
        <div className="l-box pure-u-1 ">
        <h2>Explore the unspoken world</h2>
        </div>
        <div className={appImagesClassName}>
        <img className="pure-img-responsive" src="images/projects/murmur/v2/explore.png"/>
        </div>
        <div className={appImagesClassName}>
        <img className="pure-img-responsive" src="images/projects/murmur/v2/me.png"/>
        </div>
        <div className="l-box pure-u-1">
        <p>Explore the secrets arround you and keep a voice diary.
        </p>
        </div>

        <div className="l-box pure-u-1 ">
        <h2>Express your feeling with voice</h2>
        </div>

        <div className={appImagesClassName}>
        <img className="pure-img-responsive" src="images/projects/murmur/v2/recording.png"/>
        </div>
        <div className={appImagesClassName}>
        <img className="pure-img-responsive" src="images/projects/murmur/v2/editting.png"/>
        </div>
        <div className="l-box pure-u-1">
        <p>We analyize your voice and pickup keywords. Select a color for your mood.
        </p>
        </div>
        </div>
        </div>

        <div className="murmur-mvp pure-u-1 full-width-section ">
          <div className="full-width-section-content ">
          <div className="l-box pure-u-1 ">
          <h2 >Prototyping</h2>
          </div>
          <div  className="l-box pure-u-1 ">
          <div className={appThumbnailsClassName}><img className="pure-img-responsive" src="images/projects/murmur/v1/explore.png"/></div>
          <div className={appThumbnailsClassName}><img className="pure-img-responsive" src="images/projects/murmur/v1/detail.png"/></div>
          <div className={appThumbnailsClassName}><img className="pure-img-responsive" src="images/projects/murmur/v1/playback-2.png"/></div>
          <div className={appThumbnailsClassName}><img className="pure-img-responsive" src="images/projects/murmur/v1/recording.png"/></div>
          </div>
          <div className="l-box pure-u-1 ">
          <p>Our first prototype has a card like interface.</p>
          </div>
          </div>
        </div>

        <div className="murmur-open-source pure-u-1 full-width-section ">
        <div className="full-width-section-content ">
          <div className="l-box pure-u-1 ">
          <h2 >Open Source</h2>
          </div>
          <div  className="l-box pure-u-1 ">
          <div className={appImagesClassName}>
            <div  className="pure-u-1 ">
            <img className="pure-img-responsive" src="images/projects/murmur/swipeable-view/swipe-left.gif"/>
            </div>
            <div  className="pure-u-1 ">
            <p>ZLSwipeableView</p>
            </div>
          </div>
          <div className={appImagesClassName}>
            <div  className="pure-u-1 ">
            <img className="pure-img-responsive" src="images/projects/murmur/audio-copy/ZLHistogramAudioPlotBuffer.gif"/>
            </div>
            <div  className="pure-u-1 ">
            <p>ZLHistogramAudioPlot</p>
            </div>
          </div>
          </div>
          <div className="l-box pure-u-1 ">
          <p>We opensourced some of our components and people love it. ZLSwipeableView stayed trending on github for two days.</p>
          </div>
        </div>
        </div>

        <div className="murmur-download pure-u-1 full-width-section">
          <div className="full-width-section-content">
          <h3>
          <span className="no-wrap">Love Murmur?</span> Download it <span className="no-wrap"> at the Appstore.</span>
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

module.exports = Murmur;
