describe("click a button", function() {
  it("changes the content when I call click button", function() {
    clickButtonById('test-button');
    expect(htmlSelectorId("test-button-container")).toEqual("buttonHasBeenClicked");
  });
});

describe('fills a form', function() {
  it("Fill in field, click button, expect page to have the content", function(){
    fillFormTextById('test-text-field', 'A text field');
    clickButtonById('test-form-button');
    expect(htmlSelectorId('test-form-output-container')).toEqual("A text field");
  });
});
