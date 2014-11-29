/**
* @jsx React.DOM
*/

var React = require('react'),
Router = require('react-router'),
mui = require('material-ui');

var Detector = require('./third-party/Detector.js'),
// THREE = require('../globe/third-party/three.min.js'),
TWEEN = require('./third-party/Tween.js'),
DAT = require('./globe.js');

var WebGLGlobe = React.createClass({
  mixins: [Router.Navigation],

  render: function() {
    return (
      <div className="full-page-section-center-content">
      <div className="container" ref="container"></div>

      <div id="currentInfo">
      <span ref="year1990" className="year">1990</span>
      <span ref="year1995" className="year">1995</span>
      <span ref="year2000" className="year">2000</span>
      </div>

      </div>
    );
  },
  shouldComponentUpdate: function(nextProps, nextState) {
    return false;
  },
  componentDidMount: function() {
    var container = this.refs.container.getDOMNode();
    if(!Detector.webgl){
      Detector.addGetWebGLMessage();
    } else {

      var years = ['1990','1995','2000'];
      // var container = document.getElementById('container');

      var opts = {imgDir: 'images/'};
      var globe = new DAT.Globe(container, opts);

      console.log("globe created");

      console.log(globe);
      var i, tweens = [];

      var settime = function(globe, t) {
        return function() {
          new TWEEN.Tween(globe).to({time: t/years.length},500).easing(TWEEN.Easing.Cubic.EaseOut).start();
          var y = this.refs[('year'+years[t])].getDOMNode();
          if (y.getAttribute('class') === 'year active') {
            return;
          }
          var yy = document.getElementsByClassName('year');
          for(i=0; i<yy.length; i++) {i
            yy[i].setAttribute('class','year');
          }
          y.setAttribute('class', 'year active');
        };
      };

      for(var i = 0; i<years.length; i++) {
        var y = this.refs[('year'+years[i])].getDOMNode();
        y.addEventListener('mouseover', settime(globe,i), false);
      }
      console.log("added listeners");

      var xhr;
      TWEEN.start();


      xhr = new XMLHttpRequest();
      xhr.open('GET', 'population909500.json', true);
      var onreadystatechangecallback = function(e) {
        console.log("callback");

        if (xhr.readyState === 4) {
          if (xhr.status === 200) {
            var data = JSON.parse(xhr.responseText);
            window.data = data;
            for (i=0;i<data.length;i++) {
              globe.addData(data[i][1], {format: 'magnitude', name: data[i][0], animated: true});
            }

            console.log("data added");

            globe.createPoints();
            (settime(globe,0).bind(this))();
            globe.animate();

            console.log("called animated");

            document.body.style.backgroundImage = 'none'; // remove loading
          }
        }
      };
      xhr.onreadystatechange = onreadystatechangecallback.bind(this);
      xhr.send(null);
    }

  }

});

module.exports = WebGLGlobe;
