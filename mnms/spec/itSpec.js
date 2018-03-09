describe(".toEqual", () => {

  var undefinedVar;

  it("has property toEqual", () => {
    expect(it.toEqual).not(toEqual(undefinedVar));
  });

  it("expects 1 to equal 1", () => {
    expect(1).toEqual(1);
  });

  it("expects 2 not to equal 1", () => {
    expect(1).toEqual(2);
  });

  it("expects ['a', 1] to equal ['a', 1]", () => {
    expect(['a', 1]).toEqual(['a', 1]);
  });

  it("expects ['a', [1, {'b': 2} ]] to equal  ['a', [1, {'b': 2} ]]", () => {
    expect( ['a', [1, {'b': 2} ]]).toEqual( ['a', [1, {'b': 2} ]]);
  });
});

describe(".toContain", () => {
  it("expects [1, 2, 3] to contain 2", () => {
    expect([1,2,3]).toContain(1);
  });
});

describe(".toEqual", () => {
  it("expects [1,2,3] to equal [1,2,3]", () => {
    expect([1,2,3]).toEqual([1,2,3]);
  });
});

describe(".toEqual", () => {
  it("expects [1,2,3] to not equal [4,5,6]", () => {
    expect([1,2,3]).not(toEqual([4,5,6]));
  });
});

describe(".beforeEach", () => {
  var a;
  beforeEach( () => {
    a = 1;
  });

  it("sets the value before the first test", () => {
    a += 1
    expect(a).toEqual(2);
  });

  it("runs the code before the second test", () => {
    expect(a).toEqual(1);
  });
});


describe("description", () => {
  it("[1, 2, 3] contains 2", () => {
    expect([1,2,3]).toContain(2);
  });
});
