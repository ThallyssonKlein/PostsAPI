import app from "../app.js";
import request from "supertest";

jest.mock("../service/FetchDataService.js");
import { FetchData } from "../service/FetchDataService.js";

FetchData.mockImplementation(() => {
    return new Promise((resolve, reject) => {
        resolve({
            posts: [
                {
                    name : "b",
                    tags : ["tech"]
                },
                {
                    name : "a",
                    tags : ["tech"]
                }
            ],
        });
    });
});

describe("testing the Posts controller", () => {

    it("should return 400 missing the tags query param", (done) => {
        request(app)
            .get("/api/posts")
            .expect(400)
            .end(function(err, res) {
                if (err) throw err;
                done();
            });
    });

    it("should return 400 with an invalid sortBy query parameter", (done) => {
        request(app)
            .get("/api/posts")
            .query({tags : "tech", sortBy : "invalid"})
            .expect(400)
            .end(function(err, res) {
                if (err) throw err;
                done();
            });
    });

    it("should return 400 with an invalid direction query parameter", (done) => {
        request(app)
            .get("/api/posts")
            .query({tags : "tech", direction : "invalid"})
            .expect(400)
            .end(function(err, res) {
                if (err) throw err;
                done();
            });
    });

    it("should return 200 with a valid tags query parameter", (done) => {
        request(app)
            .get("/api/posts")
            .query({tags : "tech"})
            .expect(200)
            .end(function(err, res) {
                if (err) throw err;
                done();
            });
    });
});