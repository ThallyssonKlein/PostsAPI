jest.mock("../index.js");
import app from "../index.js";
import request from "supertest";

jest.mock("../service/FetchDataService.js");
jest.mock("../service/SortService.js");

import { FetchData } from "../service/FetchDataService.js";
import { Sort } from "../service/SortService.js";

describe("testing the Posts controller", () => {

    beforeEach(() => {
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

    it("should return 400 missing the tags query param", () => {
        request(app)
            .get("/api/posts")
            .expect(400);
    });

    it("should return 400 with an invalid sortBy query parameter", () => {
        request(app)
            .get("/api/posts")
            .query({tags : "tech", sortBy : "invalid"})
            .expect(400);
    });

    it("should return 400 with an invalid direction query parameter", () => {
        request(app)
            .get("/api/posts")
            .query({tags : "tech", direction : "invalid"})
            .expect(400);
    });

    it("should return 200 with a valid tags query parameter", () => {
        request(app)
            .get("/api/posts")
            .query({tags : "tech"})
            .expect(200);
    });
});