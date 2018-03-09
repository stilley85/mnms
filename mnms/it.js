var beforeEachCallback;
const beforeEach = function(callback) {
  beforeEachCallback = callback;
}

var output = function(description) {
  var node = document.createElement("p");
  var textnode = document.createTextNode(description);
  console.log(textnode);
  node.appendChild(textnode);
  document.getElementById("content").appendChild(node);
};

var outputfail = function(description) {
  var node = document.createElement("h3");
  var textnode = document.createTextNode(description);
  console.log(textnode);
  node.appendChild(textnode);
  document.getElementById("content").appendChild(node);
};

var outputpass = function(description) {
  var node = document.createElement("h2");
  var textnode = document.createTextNode(description);
  console.log(textnode);
  node.appendChild(textnode);
  document.getElementById("content").appendChild(node);

  // var mmleft = document.createElement('img');
  // var img = document.getElementByTagName('img');
  // var att = document.createAttribute("src");
  // att.value = "../../../images/mmright.jpg";
  // img.setAttributeNode(att);
  // // var leftimg = createTextNode('src="../../../images/mmright.jpg"');
  // // mmleft.appendChild(leftimg);
  //
  // // mmleft.value = "../../../images/mmleft.jpg";
  // // var mmright = document.createElement("img") '<img src="../../../images/mmright.jpg">'
  // var node = document.createElement("h2");
  // var textnode = document.createTextNode(description);
  // console.log(textnode);
  // node.appendChild(textnode);
  // document.getElementById("content").appendChild(node);
  // document.getElementById("content").appendChild(mmleft);
};



var it = function(description, expectAndMatcher) {
  console.log('\tIt', description);
  output('It ' + description);
  if (beforeEachCallback !== undefined) {
    beforeEachCallback()
  }
  expectAndMatcher();
};

var expect = function(actualValue) {
  this.actual = actualValue;

  this.toHaveBeenCalled = function() {
    console.log(this)
    // this._diplayExpectedActual();
    if (spy !== undefined && spy.count() > 0) {
      console.log("success")
      // this._displaySuccessMessage("was called successfully")
    } else {
      console.log("failure")
      this._displaySuccessMessage("was not called")
    }
  }

  this.toEqual = function(expected) {
    console.log(this);
    this.expected = expected;
    this._displayExpectedActual();
    if (this.actual === expected) {
      this._displaySuccessMessage(' equals ')
    } else if (this.actual instanceof Array) {
      JSON.stringify(expected) === JSON.stringify(this.actual) ?
        this._displaySuccessMessage(" equals ") :
        this._displayErrorMessage(" is not equal to ");
    } else {
      this._displayErrorMessage(' not equal to ');
    }
  };

  this.toContain = function(expected) {
    this.expected = expected;
    this._displayExpectedActual();
    if (this.actual.includes(expected)) {
      this._displaySuccessMessage(" contains ")
    } else {
      this._errorMessage(' does not contain ')
    }
  };

  this.not = function(matcher) {
    return !matcher;
  };

  this._displayExpectedActual = function() {
    console.log('\t\tExpected: ', this.expected, "\n\t\tGot: ", this.expected);
    console.log(this.expected);
    var outputExpected = 'Expected: ' + this.expected;
    var outputActual = 'Got: ' + this.actual
    output(outputExpected);
    output(outputActual);
  };

  this._displaySuccessMessage = function(successString) {
    console.log("%c\t\tTest passed. ", "color: green; background-color: #c5ffb2;", this.actual, successString, this.expected)
    var successMessage= 'Test passed ' + this.actual + successString + this.expected;
    outputpass(successMessage);
  }

  this._displayErrorMessage = function(errorString) {
    console.error("\t\tTest failed. ", this.actual, errorString, this.expected);
    var errorMessage= 'Test failed ' + this.actual + errorString + this.expected;
    outputfail(errorMessage);
  };

  return this;

}
