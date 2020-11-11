const chai = require('chai');
const chaiHttp = require('chai-http');
const server = require("../src/app");
chai.use(chaiHttp);
chai.should();

describe("ROVER API", () => {
  it("Should return 400 if pattern invalid", (done) => {
    const movePattern = "FBLCRX";
    chai.request(server)
      .get(`/api/rover/${movePattern}`)
      .end((err, res) => {
        res.should.have.status(400);
        done();
      });
  });
});
