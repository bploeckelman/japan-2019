var map = document.getElementById("map");
var areas = map.getElementsByTagName("a");

for (var i = 0; i < areas.length; i++) {
  areas[i].onmouseover = function() {
    var t = document.getElementById(this.getAttribute("xlink:href").substr(1));
    t.classList.toggle("active");
  }
  areas[i].onmouseout = function() {
    var t = document.getElementById(this.getAttribute("xlink:href").substr(1));
    t.classList.toggle("active");
  }
}
