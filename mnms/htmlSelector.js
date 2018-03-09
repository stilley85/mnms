var htmlSelectorClassFirst = function(className) {
  return document.getElementsByClassName(className)[0].innerHTML;
};

var htmlSelectorId = function(idName) {
  return document.getElementById(idName).innerHTML;
};
