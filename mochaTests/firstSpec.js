const FirstTest = require("../mochaTests/firstTest.js");
const { expect } = require('chai');
// const chai  = require("chai");
// const expect = chai.expect;
// var assert = chai.assert;

const obj= new FirstTest();


describe("Test Scenario", () => {
    it("Test Case", () => {
       // expect(obj.add(1,2)).to.be.equal(3);
       console.log("Test Mocha")

    })
})