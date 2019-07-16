var ids = ['pagelet_bluebar']

ids.forEach(function(id)  {
  el = document.getElementById(id);
  el.parentNode.removeChild(el);
})

var classes = ['_1enh', '_673w', '_4_j5']

classes.forEach(function(_class) {
  while (document.getElementsByClassName(_class)[0]) {
    document.getElementsByClassName(_class)[0].remove();
  }
})
