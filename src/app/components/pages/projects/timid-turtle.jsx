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
    var appThumbnailsClassName = "l-box pure-u-1-5";
    var appImagesClassName = "l-box pure-u-1 pure-u-sm-1-2";

    return (
      <div className="timid-turtle-page full-page-section pure-g">
        <div className="timid-turtle-hero pure-u-1 full-width-section">
            <img className="svg-logo" src="images/projects/timid-turtle/turtle-turn.png" />
            <div className="tagline">
              <h1 className="brand-name">Timid Turtle</h1>
              <h2 className="mui-font-style-headline">
              Better than Flappy Bird.
              </h2>
            </div>
        </div>

        <div className="timid-turtle-intro pure-u-1 full-width-section ">
        <div className=" full-width-section-content">
        <p>
        Timid Turtle is a mobile arcade game inspired by Flappy Bird. The philosophy of these games is to create very simple controls but extremely difficult game settings. The contrast between simplicity and difficulty attracts users to keep playing.


        </p>
        </div>
        </div>

        <div className="timid-turtle-features pure-u-1 full-width-section ">
        <div className=" full-width-section-content">

        <div className="l-box pure-u-1 ">
        <h2 className="mui-font-style-headline">Gameplay</h2>
        </div>

        <div  className="l-box pure-u-1 ">
        <div className={appThumbnailsClassName}><img className="pure-img-responsive" src="images/projects/timid-turtle/home.png"/></div>
        <div className={appThumbnailsClassName}><img className="pure-img-responsive" src="images/projects/timid-turtle/tutorial.png"/></div>
        <div className={appThumbnailsClassName}><img className="pure-img-responsive" src="images/projects/timid-turtle/game-1.png"/></div>
        <div className={appThumbnailsClassName}><img className="pure-img-responsive" src="images/projects/timid-turtle/fail.png"/></div>
        <div className={appThumbnailsClassName}><img className="pure-img-responsive" src="images/projects/timid-turtle/end.png"/></div>
        </div>
        <div className=" l-box pure-u-1 ">
        <div className="smaller-width pure-u-1">
        <p>Timid Turtle is available on both the App Store and Google Play Store. On the App store, it reached 1000 downloads within 3 days of launching.</p>
        </div>
        </div>

        </div>
        </div>


        <div className="timid-turtle-leaderboard pure-u-1 full-width-section ">
        <div className=" full-width-section-content">

        <div className="l-box pure-u-1 ">
        <h2 className="mui-font-style-headline">Leaderboard</h2>
        </div>

        <div  className="l-box pure-u-1 ">
        <div className={appImagesClassName}><img className="pure-img-responsive" src="images/projects/timid-turtle/leaderboard-1.png"/></div>
        <div className={appImagesClassName}><img className="pure-img-responsive" src="images/projects/timid-turtle/leaderboard-2.png"/></div>
        </div>
        <div className=" l-box pure-u-1 ">
        <div className="smaller-width pure-u-1">
        <p>Download Timid Turtle and claim your leaderboard position!</p>
        </div>
        </div>

        </div>
        </div>

        <div className="timid-turtle-download pure-u-1 full-width-section">
          <div className="full-width-section-content">
          <h3>
            Love <span className="no-wrap">Timid Turtle?</span> <span className="no-wrap">Download it at Appstore.</span>
          </h3>
          <ul>
          <li><PaperButton
            type={PaperButton.Types.RAISED}
            label="AppStore"
            href="https://itunes.apple.com/us/app/timid-turtle/id822453884?ls=1&mt=8" /></li>
          <li><PaperButton
          type={PaperButton.Types.RAISED}
          label="Google Play"
          href="https://play.google.com/store/apps/details?id=com.axcel.timidturtle" /></li>
          <li><PaperButton
          type={PaperButton.Types.RAISED}
          label="Amazon AppStore"
            href="http://www.amazon.com/Zhixuan-Lai-Timid-Turtle/dp/B00JE5A70U/" /></li>
          </ul>
          </div>
        </div>

        </div>

    );
  },

});

module.exports = TimidTurtle;
