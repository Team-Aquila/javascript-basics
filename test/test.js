let { expect } = require("chai");
let sum = require("../lib/sum");
let sub = require("../lib/sub");
let multiply = require("../lib/multiply");
let reminder = require("../lib/reminder");
let sqrt = require("../lib/sqrt");
let powTwo = require("../lib/powTwo");
let joinString = require("../lib/joinString");
let swapString = require("../lib/swapString");

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

describe("reminder", function () {
  it("should return the reminder of the division", function () {
    expect(reminder(7, 2)).to.equal(1);
    expect(reminder(15, 4)).to.equal(3);
    expect(reminder(387, 109)).to.equal(60);
  });
});

describe("Square root", function () {
  it("should return the square root of the number", function () {
    expect(sqrt(10)).to.equal(3.1622776601683795);
    expect(sqrt(9)).to.equal(3);
    expect(sqrt(200)).to.equal(14.142135623730951);
  });
});

describe("Power 2", function () {
  it("should return the number raised to the power of two", function () {
    expect(powTwo(2, 10)).to.equal(1024);
    expect(powTwo(4, 6)).to.equal(4096);
    expect(powTwo(8, 3)).to.equal(512);
  });
});

describe("Join String", function () {
  it("should joins two strings together", function () {
    expect(joinString("Hello", "John")).to.equal("Hello John");
    expect(joinString("How are", "you")).to.equal("How are you");
    expect(joinString("Upside down", "Magic")).to.equal("Upside down Magic");
  });
});

describe("Swap String", function () {
  it("should swap a given string", function () {
    expect(swapString("Hello", "John")).to.equal("John, Hello");
    expect(swapString("How are", "you")).to.equal("you, How are");
    expect(swapString("Upside down", "Magic")).to.equal("Magic, Upside down");
  });
});
