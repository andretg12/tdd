const chai = require("chai");
const chaiHttp = require("chai-http");
const expect = require("chai").expect;

chai.use(chaiHttp);

describe("/GET array, /GET time, /GET reversename", () => {
	it("it should GET the array", done => {
		chai
			.request("http://localhost:3000")
			.get("/array")
			.end((err, res) => {
				expect(res.body).to.be.a("array");
				done();
			});
	});

	it("should GET a string with time", () => {
		chai
			.request("http://localhost:3000")
			.get("/time")
			.end((err, res) => {
				expect(res.body).to.be.a("string");
			});
	});

	it("should GET json with reverse name", () => {
		chai
			.request("http://localhost:3000")
			.get("/reversename/Andre")
			.end((err, res) => {
				expect(res.body).to.be.eql("erdnA");
			});
	});
});
