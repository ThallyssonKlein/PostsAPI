jest.mock("../repository/FetchDataRepository");

import { fetchByTag } from "../repository/FetchDataRepository.js";
import { FetchData } from "./FetchDataService.js";

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

describe("testing FetchDataService", () => {
    it("should concat two fetched results", async () => {
        const fetchedData = await FetchData("health,tech");
        expect(fetchedData.length).toBe(4);
    });
});