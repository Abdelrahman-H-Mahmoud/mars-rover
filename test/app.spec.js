const { expect } = require('chai');
const chai = require('chai');
const chaiHttp = require('chai-http');
const server = require("../src/app");
const DIRECTIONS = require('../src/const/directions');

chai.use(chaiHttp);
chai.should();

describe("ROVER API", (done) => {
  it("Should return 400 if pattern invalid", (done) => {
    const movePattern = "FBLCRX";
    chai.request(server)
      .get(`/api/rover/${movePattern}`)
      .end((err, res) => {
        res.should.have.status(400);
        done();
      });
  });

  it("Should return 200 and current position if pattern is valid  ", (done) => {
    const movePattern = "FLFFFRFLB";
    const expected = {
      x: 6,
      y: 4,
      direction: DIRECTIONS.NORTH.value
    }
    chai.request(server)
      .get(`/api/rover/${movePattern}`)
      .end((err, res) => {
        res.should.have.status(200);
        expect(res.body).to.deep.equal(expected);
        done();
      });
  });
});
