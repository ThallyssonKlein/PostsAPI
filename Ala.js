import apisauce from "apisauce";
import { it } from "jest-circus";
import { describe } from "yargs";

const API = apisauce.create({
    baseURL: "https://api.hatchways.io"
});
const API2 = apisauce.create({
    baseURL: "http://localhost:3000"
});

describe("temporary tests", () => {
    it("should return the same result from both apis", async () => {
        const result1 = await API.get("/assessment/solution/posts?tags=history,tech&sortBy=likes&direction=desc");
        const result2 = await API2.get("/api/posts?tags=history,tech&sortBy=likes&direction=desc");
        expect(result1.data).toEqual(result2.data);
    });
});