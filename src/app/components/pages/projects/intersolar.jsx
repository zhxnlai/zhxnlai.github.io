/**
* @jsx React.DOM
*/

var React = require('react'),
Router = require('react-router'),
mui = require('material-ui'),
Headline = require('../../components/headline.jsx'),
PaperButton = mui.PaperButton;

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

        <div className="intersolar-intro pure-u-1 full-width-section ">
        <div className=" full-width-section-content">
        <p>Intersolar is a collaboration between <span className="no-wrap">Zhixuan Lai</span>, <span className="no-wrap">Yanzhe Liu</span>, <span className="no-wrap">Zhetian Sun</span> and <span className="no-wrap">Lingyu Zhang</span>.  </p>
        <p>Inspired by the movie <a href="http://www.interstellarmovie.net/">Interstellar</a>,
        we created a virtual solar system within the Oculus Rift. The work was based on
        our last hack, Horoscoper. We enhanced the graphic and keeped the multiplayer feature.
        Players can experience the stunning view of the entire solar system as well as that on any planet.
        </p>
        </div>
        </div>


        <div className="intersolar-video pure-u-1 full-width-section ">
        <div className="full-width-section-content ">
        <div className="l-box pure-u-1 ">
        <div className="video-wrapper">
        <iframe height="360" width="640" frameBorder="0" src="//www.magisto.com/embed/bENMKkQXHG1oWx1iCzE?l=vem&o=w&c=b"></iframe>
        </div>
        </div>
        <div className="l-box pure-u-1 ">
        <p>See our hack at <a href="http://challengepost.com/software/intersolar">ChallengePost</a>.</p>
        </div>
        </div>
        </div>


        <div className="intersolar-features pure-u-1 full-width-section ">
        <div className=" full-width-section-content">
          <div className="l-box pure-u-1 ">

          <h2>Hands free virtual reality</h2>
          </div>

          <div className="l-box pure-u-1 ">
            <p>We used Myo from Thalmic Labs to control the space and time.
            </p>
          </div>

          <div className="l-box pure-u-1 ">

          <video className="pure-u-1" autoPlay loop muted>
          <source src="images/projects/intersolar/zoom-2.mp4" type="video/mp4"/>
          <source src="images/projects/intersolar/time.mp4" type="video/mp4"/>
          Your browser does not support the video tag.
          </video>
          </div>

          <div className="l-box pure-u-1 ">
          <p >Zoom in and out using your fist.
          </p>
          </div>

          <div className="l-box pure-u-1 ">
          <video className="pure-u-1" autoPlay loop muted>
          <source src="images/projects/intersolar/time.mp4" type="video/mp4"/>
          Your browser does not support the video tag.
          </video>
          </div>

          <div className="l-box pure-u-1 ">
          <p >Take control the time with your palm.
          </p>
          </div>
        </div>
        </div>

        <div className="intersolar-hack-sc pure-u-1 full-width-section ">
          <div className=" full-width-section-content">

          <div className="l-box pure-u-1 ">
          <h2>Having fun at HackSC </h2>
          </div>


          <div className="l-box pure-u-1 ">

          <p>Intersolar was made at HackSC fall 2014.
          </p>
          </div>

          <div className="l-box pure-u-1 ">
          <div className="tweet-box  pure-u-1">
          <blockquote className="twitter-tweet" lang="en">
          <p><a href="https://twitter.com/hashtag/myo?src=hash">#myo</a> +
          <a href="https://twitter.com/oculus">@oculus</a> + astronomy =
          Intersolar, a hack that lets you zoom through the solar system!
          <br/>

          <a href="https://twitter.com/hashtag/HackSC?src=hash">#HackSC</a>
          <a href="http://t.co/zBeISl8Uhs">pic.twitter.com/zBeISl8Uhs</a></p>
          <div className="author">&mdash; HackSC (@gohacksc) <a href="https://twitter.com/gohacksc/status/531530456252952577">November 9, 2014</a>
          </div>
          </blockquote>
          <script async src="//platform.twitter.com/widgets.js" charSet="utf-8"></script>
          </div>
          </div>

          <div className="l-box pure-u-1 ">
          <p>People were talkling about us.
          </p>
          </div>


          </div>
        </div>


        <div className="intersolar-gallery ">
        <div className="pure-u-1 full-width-section ">
        <div className="full-width-section-content ">

        <div className="pure-u-1-3">
        <img className="pure-img-responsive" src="images/projects/intersolar/demo.jpg"/>
        </div>
        <div className="pure-u-1-3">
        <img className="pure-img-responsive" src="images/projects/intersolar/demo-3.jpg"/>
        </div>
        <div className="pure-u-1-3">
        <img className="pure-img-responsive" src="images/projects/intersolar/interesting-hack.jpg"/>
        </div>

        <div className="pure-u-1-2">
        <img className="pure-img-responsive" src="images/projects/intersolar/team.jpg"/>
        </div>
        <div className="pure-u-1-2">
        <img className="pure-img-responsive" src="images/projects/intersolar/interesting-hack-3.jpg"/>
        </div>

        </div>
        </div>
        </div>

        <div className="intersolar-download pure-u-1 full-width-section">
        <div className="full-width-section-content">
        <h3>
        Want to learn more about Intersolar? Find us <span className="no-wrap"> at Challenge Post.</span>
        </h3>
        <PaperButton
        type={PaperButton.Types.RAISED}
        label="Challenge Post"
        href="http://challengepost.com/software/intersolar" />
        </div>
        </div>

        </div>

    );
  },

});

module.exports = Intersolar;
