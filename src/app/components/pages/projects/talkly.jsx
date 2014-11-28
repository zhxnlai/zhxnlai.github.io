/**
* @jsx React.DOM
*/

var React = require('react'),
Router = require('react-router'),
mui = require('material-ui'),
Headline = require('../../components/headline.jsx'),
PaperButton = mui.PaperButton,
Paper = mui.Paper;


// 17m27 24m40
var Talkly = React.createClass({
  mixins: [Router.Navigation],

  render: function() {
    var appImagesClassName = "l-box pure-u-1 pure-u-sm-1-2";
    var appThumbnailsClassName = "l-box pure-u-1-5";
    return (
      <div className="talkly-page full-page-section pure-g">
        <div className="talkly-hero pure-u-1 full-width-section">
            <img className="svg-logo" src="images/projects/talkly/icon-white.png" />
            <div className="tagline">
              <h1 className="brand-name">Talkly</h1>
              <h2 className="mui-font-style-headline">
              Give Your Message A Voice.
              </h2>
            </div>
        </div>

        <div className="talkly-intro pure-u-1 full-width-section ">
          <p className=" full-width-section-content">Talkly is an asynchronous voice-messaging app
          that combines the power of voice and convenience of text in a frictionless way.
          Unlike Whatsapp and other IM apps, Talkly’s voice-centric focus provides an
          extremely simple yet friendly voice messaging experience.
          </p>
        </div>

        <div className="talkly-features pure-u-1 full-width-section ">
          <div className="full-width-section-content ">
          <div className="l-box pure-u-1 ">
          <h2 className="mui-font-style-headline">Frictionless Voice</h2>
          </div>
            <div className={appImagesClassName}>
              <img className="pure-img-responsive" src="images/projects/talkly/ui/chat.png"/>
            </div>
            <div className={appImagesClassName}>
            <img className="pure-img-responsive" src="images/projects/talkly/ui/recording.png"/>
            </div>
            <div className="l-box pure-u-1">
              <p>Hold on a contact's name to record a message and release to send.
              <span className="no-wrap"> It is that easy.</span>
              </p>
            </div>

            <div className="l-box pure-u-1 ">
            <h2 className="mui-font-style-headline">Addressbook Integration</h2>
            </div>

            <div className={appImagesClassName}>
            <img className="pure-img-responsive" src="images/projects/talkly/ui/addressbook-1.png"/>
            </div>
            <div className={appImagesClassName}>
            <img className="pure-img-responsive" src="images/projects/talkly/ui/addressbook-2.png"/>
            </div>
            <div className="l-box pure-u-1">
            <p>Stay connected with all your contancts.
            </p>
            </div>

            <div className="l-box pure-u-1 ">
            <h2 className="mui-font-style-headline">Transcription</h2>
            </div>

            <div className={appImagesClassName}>
            <img className="pure-img-responsive" src="images/projects/talkly/ui/send-transcription.png"/>
            </div>
            <div className={appImagesClassName}>
            <img className="pure-img-responsive" src="images/projects/talkly/concept/lock-screen.png"/>
            </div>
            <div className="l-box pure-u-1">
            <p>Connect friends not on talkly by sending transcriptions.
            <span className="no-wrap"> It is that easy.</span>
            </p>
            </div>

            <div className={appImagesClassName}>
            <img className="pure-img-responsive" src="images/projects/talkly/ui/transcribe.png"/>
            </div>
            <div className={appImagesClassName}>
            <img className="pure-img-responsive" src="images/projects/talkly/ui/transcription.png"/>
            </div>
            <div className="l-box pure-u-1">
            <p>Not at position of listening? We've got your back!
            <span className="no-wrap"> Just turn on transcription.</span>
            </p>
            </div>


          </div>
        </div>

        <div className="talkly-pitch pure-u-1 full-width-section ">
          <div className="full-width-section-content ">
            <div className="l-box pure-u-1 ">
            <div className="video-wrapper">
            <iframe width="560" height="315" src="//www.youtube.com/embed/MgicxcA3SOA?start=1047&end=1480" frameBorder="0" allowFullScreen></iframe>
            </div>
            </div>
            <div className="l-box pure-u-1 ">
              <p>Watch our pitch at StartupUCLA demo day 2014!</p>
            </div>
          </div>
        </div>



        <div className="talkly-inspiration pure-u-1 full-width-section ">
          <div className="full-width-section-content ">

          <div className="l-box pure-u-1 ">
          <h2 className="mui-font-style-headline">Inspiration</h2>
          </div>
          <div  className="l-box pure-u-1 ">
            <p>Talkly was inspired by the elder population who don't like to text.
          We aim to provide the simpliest way to connect to them.</p>
          </div>
        </div>
        </div>

        <div className="talkly-users ">
        <div className="pure-u-1 full-width-section ">
        <div className="full-width-section-content ">

        <div className="l-box pure-u-1 ">
        <h2 className="mui-font-style-headline">Talking to our users</h2>
        </div>
        <div className="pure-u-1-2">
        <img className="pure-img-responsive" src="images/projects/talkly/users/table.jpg"/>
        </div>
        <div className="pure-u-1-2">
        <img className="pure-img-responsive" src="images/projects/talkly/users/user.jpg"/>
        </div>

        </div>
        </div>
        </div>

        <div className="talkly-mvp pure-u-1 full-width-section ">
          <div className="full-width-section-content ">

          <div className="l-box pure-u-1 ">
          <h2 className="mui-font-style-headline">Prototyping</h2>
          </div>

            <div  className="l-box pure-u-1 ">
                <div className={appThumbnailsClassName}><img className="pure-img-responsive" src="images/projects/talkly/mvp/mvp2/chats.png"/></div>
                <div className={appThumbnailsClassName}><img className="pure-img-responsive" src="images/projects/talkly/mvp/mvp2/friends.png"/></div>
                <div className={appThumbnailsClassName}><img className="pure-img-responsive" src="images/projects/talkly/mvp/mvp2/friend-requests.png"/></div>
                <div className={appThumbnailsClassName}><img className="pure-img-responsive" src="images/projects/talkly/mvp/mvp2/settings.png"/></div>
                <div className={appThumbnailsClassName}><img className="pure-img-responsive" src="images/projects/talkly/mvp/comparison.png"/></div>
            </div>
            <div className=" l-box pure-u-1 ">
              <div className="smaller-width pure-u-1">
              <p>This is what became reality in two weeks.</p>
              </div>
            </div>

            <div className="l-box pure-u-1 ">
            <h2 className="mui-font-style-headline">Open Source</h2>
            </div>

            <div className={appThumbnailsClassName}>
            <img className="pure-img-responsive" src="images/projects/talkly/inspiration/whatsapp-4.png"/>
            </div>
            <div className={appThumbnailsClassName}>
            <img className="pure-img-responsive" src="https://github.com/zhxnlai/ZLPeoplePickerViewController/raw/master/Previews/emailsPreview.gif"/>
            </div>


            <div className=" l-box pure-u-1 ">
            <div className="smaller-width pure-u-1">
            <p>The built in addresss book UI on iOS does not handle well multiple languages (even Whatsapp doesn't).
            So I created ZLPeoplePickerViewController, a replacement for ABPeoplePickerNavigationController that supports UILocalized​Indexed​Collation</p>
            </div>
            </div>

            <div className="smaller-width l-box pure-u-1 ">
            </div>


          </div>

        </div>

        <div className="talkly-download pure-u-1 full-width-section">
          <div className="full-width-section-content">
          <h3>
            <span className="no-wrap">Love Talkly?</span> Download it <span className="no-wrap"> at the Appstore.</span>
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

  // componentDidMount: function() {
  //   // console.log(this.refs.slickContainer)
  //   $(this.refs.slickContainer.getDOMNode()).slick({
  //     slidesToShow: 3,
  //     infinite: true,
  //     slidesToScroll: 3
  //
  //   });
  // },
  //
  // componentWillUnmount: function() {
  //   $(this.refs.slickContainer.getDOMNode()).unslick();
  //
  // },


});

module.exports = Talkly;
