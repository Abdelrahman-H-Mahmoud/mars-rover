const { expect } = require('chai');
const validateString = require('../../src/util/validateString');

describe("validate String util function", () => {
  it ("Should return false if string is empty",()=>{
    expect(validateString("")).to.be.false;
  })
});