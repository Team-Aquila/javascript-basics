let sum = require("../lib/sum");
let sub = require("../lib/sub");
let { expect } = require("chai");

describe("sum", function () {
  // test a functionality
  it("should add numbers", function () {
    // add an assertion
    expect(sum(1, 20)).to.equal(21);
  });
});

describe("sub", function () {
  // test a functionality
  it("should subtract numbers", function () {
    // add an assertion
    expect(sub(20, 1)).to.equal(19);
  });
});
