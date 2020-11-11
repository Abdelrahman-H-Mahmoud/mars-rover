const { expect } = require('chai');
const validateString = require('../../src/util/validateString');

describe("validate String util function", () => {
  it ("Should return false if string is empty",()=>{
    expect(validateString("")).to.be.false;
  });
  it("Should return false if the string not one of this character[F,B,L,R]", () => {
    let str = "FBLCRX";
    expect(validateString(str)).to.be.false;
  });
  it("Should return true if the string is one of this character[F,B,L,R]", () => {
    let str = "FLFFFRFLB";
    expect(validateString(str)).to.be.true;
  });
});