jest.mock("../repository/FetchDataRepository.js");
jest.mock("./FetchDataService.js");

import { fetchByTag } from "../repository/FetchDataRepository.js";
import { FetchData } from "./FetchDataService.js";

describe("testing FetchDataService", () => {
    beforeEach(() => {
        fetchByTag.mockImplementation(() => {
            return new Promise((resolve, reject) => {
                resolve({
                    posts: [
                        {
                            name : "a"
                        },
                        {
                            name : "b"
                        }
                    ],
                });
            });
        });
    });

    it("should concat two fetched results", async () => {
        const fetchedData = await FetchData("health,tech");
        expect(fetchedData.posts.length).toBe(4);
    });
});