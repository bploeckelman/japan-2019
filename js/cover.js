var map = document.getElementById("map");

var areas = map.getElementsByTagName("a");
for (var i = 0; i < areas.length; i++) {
  areas[i].onmouseover = function() {
    var circle = this.getElementsByTagName("circle")[0];
    var animate = circle.getElementsByTagName("animate")[0];
    animate.setAttribute("dur", "0.66s");

    var tag = document.getElementById(this.getAttribute("xlink:href").substr(1));
    tag.classList.add("active");
  }
  areas[i].onmouseout = function() {
    var circle = this.getElementsByTagName("circle")[0];
    var animate = circle.getElementsByTagName("animate")[0];
    animate.setAttribute("dur", "3s");

    var tag = document.getElementById(this.getAttribute("xlink:href").substr(1));
    tag.classList.remove("active");
  }
}

var tags = document.getElementsByClassName("tag");
for (var i = 0; i < tags.length; i++) {
  tags[i].onmouseover = function() {
    this.classList.add("active");
    for (var j = 0; j < areas.length; j++) {
      if (areas[j].getAttribute("xlink:href").substr(1) === this.getAttribute("id")) {
        var circle = areas[j].getElementsByTagName("circle")[0];
        circle.classList.add("active");
        var animate = circle.getElementsByTagName("animate")[0];
        animate.setAttribute("dur", "0.66s");
      }
    }
  }
  tags[i].onmouseout = function() {
    this.classList.remove("active");
    for (var j = 0; j < areas.length; j++) {
      if (areas[j].getAttribute("xlink:href").substr(1) === this.getAttribute("id")) {
        var circle = areas[j].getElementsByTagName("circle")[0];
        circle.classList.remove("active");
        var animate = circle.getElementsByTagName("animate")[0];
        animate.setAttribute("dur", "3s");
      }
    }
  }
}
