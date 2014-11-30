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
      <div className=" full-width-section-content">
      <p>Spacenarium is a collaboration between <span className="no-wrap">Yakun Chen</span>, <span className="no-wrap">Weijian Lin</span>, <span className="no-wrap">Zhixuan Lai</span> and <span className="no-wrap">Lingyu Zhang</span>.  </p>
      <p>
      It is a multi-player space-shooting game for iOS made with Augmented Reality technology.
      The game constructs a virtual arena on a real world image target (e.g., a poster, an iPad screen displaying still images).
      Players can then navigate their avatars by moving their devices around the image target and shoot each other in the virtual world.
      </p>
      </div>
      </div>


      <div className="spacinarium-video pure-u-1 full-width-section ">
      <div className="full-width-section-content ">
      <div className="l-box pure-u-1 ">
      <p>TODO: 3d model viewer for city and paper plane.</p>
      </div>

      <div className="l-box pure-u-1 ">
      <div className="video-wrapper">
      <iframe width="560" height="315" src="//www.youtube.com/embed/Js9WM8MzHVE" frameBorder="0" allowFullScreen></iframe>      </div>
      </div>
      <div className="l-box pure-u-1 ">
      <p>See our hack at <a href="http://challengepost.com/software/spacinarium">ChallengePost</a>.</p>
      </div>
      </div>
      </div>


      <div className="spacinarium-features pure-u-1 full-width-section ">
      <div className=" full-width-section-content">
      <div className="l-box pure-u-1 ">

      <h2>AR Defender, the prelude to my <span className="no-wrap">AR experiment.</span></h2>
      </div>

      <div className="l-box pure-u-1 ">
      <p>I started experimenting with AR in Spring break. I had the idea of combining it with tower defend, one of my favorite game genres. The results turned out to have lots of potenital.
      </p>
      </div>

      <div className="l-box pure-u-1 ">

      <video className="pure-u-1" controls muted>
      <source src="images/projects/spacinarium/ar-defend-1.mp4" type="video/mp4"/>
      Your browser does not support the video tag.
      </video>
      </div>

      <div className="l-box pure-u-1 ">
      <p >The first version, towers ready.
      </p>
      </div>

      <div className="l-box pure-u-1 ">
      <video className="pure-u-1" controls muted>
      <source src="images/projects/spacinarium/ar-defend-2.mp4" type="video/mp4"/>
      Your browser does not support the video tag.
      </video>
      </div>

      <div className="l-box pure-u-1 ">
      <p >Better, a spaceship with attitude control.
      </p>
      </div>


      <div className="l-box pure-u-1 ">
      <video className="pure-u-1" controls muted>
      <source src="images/projects/spacinarium/ar-defend-3.mp4" type="video/mp4"/>
      Your browser does not support the video tag.
      </video>
      </div>

      <div className="l-box pure-u-1 ">
      <p >Now you can even attack the towers.
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

      <p>Spacinarium was made at <span className="no-wrap">LAHacks Spring 2014</span>. We are the winner of <span className="no-wrap">Daqri Grand Price</span>.
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
      <img className="pure-img-responsive" src="images/projects/spacinarium/demo-para-2_mini.jpg"/>
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
