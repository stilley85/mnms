var describe = function(functionName, it) {
  console.log('Function being tested:', functionName);
  var description = 'Function being tested: ' + functionName;
  var node = document.createElement("h1");
  var textnode = document.createTextNode(description);
  node.appendChild(textnode);
  document.getElementById("content").appendChild(node);
  it();
};

// function funct(a, b, c, d) {
// for (let i = 0; i < funct.arguments.length; i++) {
// console.log(arguments[i]);
// }}
