# README for mnms Javascript Testing Library

##  Description
* 'mnms' is a custom testing library built from the ground up using pure Javascript (no Javscript libraries were used)
*

How to install
Type into the terminal: 'npm install mnmsplus'

## How to use
* Require all of your spec and model files in the default 'SpecRunner.html' file that came with your install. Ensure you leave in the default requirements, as this requires in the code needed to run the testing framework
* Open the 'SpecRunner.html' file. This will run your tests and output the results in your browser

![screenshot](https://i.imgur.com/14UYkvY.png)

## How to run tests
The testing framework includes the following structure:
* 'describe' blocks that your tests will fit within
* 'it' blocks within your describe blocks, to run individual tests
* Within your 'it' blocks, you can provide expectations and matchers to define your unit tests

### How to use the testing framework including 'expect':
* Feed in the code you want evaluated within e.g. expect('code to evaluate')
* Feed in what you expect into your matcher e.g. toEqual('expected result')
```javascript
describe("1 equals 1", () => {;
  it("expects 1 to equal 1", () => {
    expect(1).toEqual(1);
  });
});
```

### Hooks available:
* Before each enables you to run a specified set of code for every test within that describe block
```javascript
describe(".beforeEach", () => {
  beforeEach( () => {
    var a;
    a = 2;
  });

  it("sets the value before the first test", () => {
    expect(a).toEqual(2);
  });
```

### Matchers available:
* toEqual
```javascript
it("expects 1 to equal 1", () => {
  expect(1).toEqual(1);
});
```
* toContain
```javascript
it("expects [1, 2, 3] to contain 2", () => {
  expect([1,2,3]).toContain(1);
});
```
* not (utility - to be used to reverse a matcher)
```javascript
it("expects [1,2,3] to not equal [4,5,6]", () => {
  expect([1,2,3]).not(toEqual([4,5,6]));
});
```

### HTML element selections to test front end (e.g. Feature tests)
* htmlSelectClassFirst
 * Selects the first html element on the page with that class
* htmlSelectClassId
 * Selects the html element on the page that has that id
* fillFormText
 * selects text field by id and fills it with provided text
* clickButton
 * clicks button on page with that id
####  Example using all feature test elements
 ```javascript
describe('fills a form', function() {
  it("Fill in field, click button, expect page to have the content", function(){
      (see *Note - need to add 'visit('/')' using another library)
      fillFormTextById('test-text-field', 'A text field');
      clickButtonById('test-form-button');
      expect(htmlSelectorId('test-form-output-container')).toEqual("A text field");
  });
});
 ```
* *Note: Requires selenium or equivalent library to visit the page you want to test

### Spies

Spies can be used to test the number of times a method was called, and the arguments supplied each time.

#### Example using spies

```javascript
describe("changeTyre", function() {
  it("calls .changeTyre() twice", function() {
    var servicedTyres = 0
    var car = {
      changeTyre: function(brand) {
        servicedTyres += 1;
      },
      service: function(brand) {
        this.changeTyre(brand);
        this.changeTyre(brand);
      }
    }

    spyOn(plane, "changeTyre")

    plane.service("pirelli");

    expect(spy.numberOfTimesCalled).toEqual(2);
    expect(spy.arrayOfArguments).toContain(["pirelli"]);
  });
});
```
