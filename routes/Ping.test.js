jest.mock("../index.js");
import request from "supertest";
import app from "../app.js";

describe("testing the Ping controller", () => {
    it("should return a json", (done) => {
        request(app)
            .get('/api/ping')
            .expect('Content-Type', /json/)
            .expect(200)
            .end(function(err, res) {
                if (err) throw err;
                done();
            });
    });
});