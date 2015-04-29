'use strict';

function getMouseCoords(e) {
  var e = e || window.event;
  //document.getElementById('msg').innerHTML = e.clientX + ', ' + 
   //        e.clientY + '<br>' + e.screenX + ', ' + e.screenY;
}


var followCursor = (function() {
  var s = document.createElement('div');
  s.setAttribute('class', 'folow');

  return {
    init: function() {
      document.body.appendChild(s);
    },

    run: function(e) {
      var e = e || window.event;
      s.style.left  = (e.clientX - 20) + 'px';
      s.style.top = (e.clientY - 50) + 'px';
      getMouseCoords(e);
    }
  };
}());

window.onload = function() {
  //followCursor.init();
  //document.body.onmousemove = followCursor.run;
}


















