let sum = require("../lib/sum");
let sub = require("../lib/sub");
let multiply = require("../lib/multiply");
let { expect } = require("chai");

describe("sum", function () {
  it("should add numbers", function () {
    expect(sum(1, 20)).to.equal(21);
  });
});

describe("sub", function () {
  it("should subtract numbers", function () {
    expect(sub(20, 1)).to.equal(19);
  });
});

describe("multiply", function () {
  it("should multiply numbers", function () {
    expect(multiply(20, 1)).to.equal(20);
    expect(multiply(2, 2)).to.equal(4);
    expect(multiply(15, 2)).to.equal(30);
  });
});
