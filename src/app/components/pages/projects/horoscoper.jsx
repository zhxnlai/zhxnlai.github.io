/**
* @jsx React.DOM
*/

var React = require('react'),
Router = require('react-router'),
mui = require('material-ui'),
PaperButton = mui.PaperButton,
Paper = mui.Paper;

var Horoscoper = React.createClass({
  mixins: [Router.Navigation],

  render: function() {
    return (
      <div className="horoscoper-page full-page-section pure-g">
        <div className="horoscoper-hero pure-u-1 full-width-section">
        <div className="tagline">
        <h1 className="brand-name">Horoscoper</h1>
        <h2 className="mui-font-style-headline">
        A VR planetarium for Oculus Rift.
        </h2>
        </div>
      </div>

        <div className="horoscoper-intro pure-u-1 full-width-section ">
        <div className="l-box full-width-section-content">
        <p>
        Horoscoper is a mini VR planetarium app for Oculus Rift. Powered by Unity3d game engine and headtracking technology, it deliveries an amazing stargazing experience in virtual reality.
        </p>
        </div>
        </div>

        <div className="horoscoper-features pure-u-1 full-width-section ">
        <div className=" full-width-section-content">

          <div className="l-box pure-u-1">
          <p >
          Horoscoper is also designed for educational use. It creates a virtual
          galaxy map with over 80000 stars and as well as illustrations for all
          constellations. Users are able to browse the constellations as if they
          are standing in the center of the universe, and see the detailed
          information of the constellation.
          </p>
          </div>
          <div className="l-box pure-u-1">
          <img className="pure-img-responsive" src="images/projects/horoscoper/gameplay-3.png"/>
          </div>

          <div className="l-box pure-u-1">
          <div className="l-box pure-u-1 pure-u-sm-1-2">
          <img className="pure-img-responsive" src="images/projects/horoscoper/taurus.png"/>
          </div>
          <div className="l-box pure-u-1 pure-u-sm-1-2">
          <p>
          With the help of wolfram alpha APIs, users, for example middle and high school
          students, can query online for detailed information about virtually any
          celestial bodies, eg. their coordinates, constitution, and a lot of fun facts.
          </p>
          </div>
          </div>

          <div className="l-box pure-u-1">
          <p >
          Furthermore, Horoscoper supports realtime multiplayer. Users can share their sights of view, represented by a laser pointer, via our backend server. This is typically useful for group instruction, where teachers can easily annotate stars for students in the same virtual planetarium.
          </p>
          </div>

          <div className="l-box pure-u-1 ">
          <div className="video-wrapper">
          <iframe width="560" height="315" src="//www.youtube.com/embed/PsGxNRyopRE" frameBorder="0" allowFullScreen></iframe></div>
          </div>

          <div className="l-box pure-u-1">
          <p >
          Watch our demo video.
          </p>
          </div>

        </div>
        </div>

        <div className="intersolar-hack-sc pure-u-1 full-width-section ">
        <div className=" full-width-section-content">

        <div className="l-box pure-u-1 ">
        <h2>Having fun at HackUCI. </h2>
        </div>

        <div className="l-box pure-u-1 ">
        <p>Horoscoper was made at <span className="no-wrap">HackUCI spring 2014</span>. We are the winner of <span className="no-wrap">Top Ten</span> and <span className="no-wrap">Best VR Hack</span>.
        </p>

        </div>

        </div>
        </div>


        <div className="horoscoper-gallery ">
        <div className="pure-u-1 full-width-section ">
        <div className="full-width-section-content ">

        <div className="pure-u-1-3">
        <img className="pure-img-responsive" src="images/projects/horoscoper/selfie.jpg"/>
        </div>
        <div className="pure-u-1-3">
        <img className="pure-img-responsive" src="images/projects/horoscoper/hackUCI.jpg"/>
        </div>
        <div className="pure-u-1-3">
        <img className="pure-img-responsive" src="images/projects/horoscoper/demo-2.jpg"/>
        </div>

        <div className="pure-u-1-2">
        <img className="pure-img-responsive" src="images/projects/horoscoper/team.jpg"/>
        </div>
        <div className="pure-u-1-2">
        <img className="pure-img-responsive" src="images/projects/horoscoper/demo.jpg"/>
        </div>

        </div>
        </div>
        </div>


        <div className="horoscoper-download pure-u-1 full-width-section">
        <div className="full-width-section-content">
        <h3>
        Want to learn more about Horoscoper? Find us <span className="no-wrap"> at Challenge Post.</span>
        </h3>
        <PaperButton
        type={PaperButton.Types.RAISED}
        label="Challenge Post"
        href="http://challengepost.com/software/horoscoper" />
        </div>
        </div>

        </div>

    );
  },

});

module.exports = Horoscoper;
