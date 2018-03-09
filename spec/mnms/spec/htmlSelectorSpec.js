describe("htmlSelectorClassFirst", function() {
  it("selects an element by class", function() {
    expect(htmlSelectorClassFirst("test-class")).toEqual("PLACEHOLDER");
  });
});

describe("htmlSelectorID", function() {
  it("selects an element by id", function() {
    expect(htmlSelectorId('test-id')).toEqual("PLACEHOLDER");
  });
});
