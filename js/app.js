var body=document.getElementsByTagName("body")[0];
var parent=document.getElementById("parent-div");
var child=document.getElementById("child-div");
body.onscroll = function() {
  if(document.documentElement.scrollTop>=child.offsetTop) {
   child.style.display="block"
  }

};
