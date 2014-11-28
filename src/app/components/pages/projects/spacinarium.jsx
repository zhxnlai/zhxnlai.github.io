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

var Spacinarium = React.createClass({
  mixins: [Router.Navigation],

  render: function() {
    return (
      <div className="spacinarium-page full-page-section pure-g">

      <div className="spacinarium-hero pure-u-1 full-width-section">
      <div className="tagline">
      <h1 className="brand-name">Spacinarium</h1>
      <h2 className="mui-font-style-headline">
      Multiplayer AR shooter.
      </h2>
      </div>
      </div>

      <div className="spacinarium-intro pure-u-1 full-width-section ">
      <p className=" full-width-section-content">
      Spacenarium is a Hackthon project. It is a multi-player space-shooting game, using Augmented Reality technology. A virtual arena is contracted and shared on several Apple devices, when they are aiming at the same flat area. Players can navigate their avatars by moving their devices around the flat area, and shoot each other in the virtual world.
      </p>
      </div>


      <div className="spacinarium-video pure-u-1 full-width-section ">
      <div className="full-width-section-content ">
      <div className="l-box pure-u-1 ">
      <div className="video-wrapper">
      <iframe width="560" height="315" src="//www.youtube.com/embed/Js9WM8MzHVE" frameBorder="0" allowFullScreen></iframe>      </div>
      </div>
      <div className="l-box pure-u-1 ">
      <p>See our hack at ChallengePost.</p>
      </div>
      </div>
      </div>


      <div className="spacinarium-features pure-u-1 full-width-section ">
      <div className=" full-width-section-content">
      <div className="l-box pure-u-1 ">

      <h2>AR Defender, the prelude to my <span className="no-wrap">AR experiment.</span></h2>
      </div>

      <div className="l-box pure-u-1 ">
      <p>I started experimenting with AR in Spring break.
      </p>
      </div>

      <div className="l-box pure-u-1 ">

      <video className="pure-u-1" controls muted>
      <source src="images/projects/spacinarium/ar-defend-1.mp4" type="video/mp4"/>
      Your browser does not support the video tag.
      </video>
      </div>

      <div className="l-box pure-u-1 ">
      <p >The first version.
      </p>
      </div>

      <div className="l-box pure-u-1 ">
      <video className="pure-u-1" controls muted>
      <source src="images/projects/spacinarium/ar-defend-2.mp4" type="video/mp4"/>
      Your browser does not support the video tag.
      </video>
      </div>

      <div className="l-box pure-u-1 ">
      <p >Better, with a spaceship.
      </p>
      </div>


      <div className="l-box pure-u-1 ">
      <video className="pure-u-1" controls muted>
      <source src="images/projects/spacinarium/ar-defend-3.mp4" type="video/mp4"/>
      Your browser does not support the video tag.
      </video>
      </div>

      <div className="l-box pure-u-1 ">
      <p >Now you can attack the towers.
      </p>
      </div>

      </div>
      </div>

      <div className="spacinarium-hack-sc pure-u-1 full-width-section ">
      <div className=" full-width-section-content">

      <div className="l-box pure-u-1 ">
      <h2>Having fun at LAHacks. </h2>
      </div>


      <div className="l-box pure-u-1 ">

      <p>Spacinarium was made at LAHacks Spring 2014. We are the winner of Daqri Grand Price.
      </p>
      </div>

      </div>
      </div>


      <div className="spacinarium-gallery ">
      <div className="pure-u-1 full-width-section ">
      <div className="full-width-section-content ">

      <div className="pure-u-1-2">
      <img className="pure-img-responsive" src="images/projects/spacinarium/team.jpg"/>
      </div>
      <div className="pure-u-1-2">
      <img className="pure-img-responsive" src="images/projects/spacinarium/opening.jpg"/>
      </div>
      <div className="pure-u-1">
      <img className="pure-img-responsive" src="images/projects/spacinarium/demo-para-2.jpg"/>
      </div>
      <div className="pure-u-1">
      <img className="pure-img-responsive" src="images/projects/spacinarium/demo.jpg"/>
      </div>
      </div>
      </div>
      </div>

      <div className="spacinarium-download pure-u-1 full-width-section">
      <div className="full-width-section-content">
      <h3>
      Want to learn more about Spacinarium? Find us <span className="no-wrap"> at Challenge Post.</span>
      </h3>
      <PaperButton
      type={PaperButton.Types.RAISED}
      label="Challenge Post"
      href="http://challengepost.com/software/spacinarium" />
      </div>
      </div>

      </div>

    );
  },

});

module.exports = Spacinarium;
