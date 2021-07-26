jest.mock("./SortService.js");

import { Sort } from "./SortService.js";

describe("testing SortService", () => {
    it("should sort an array of objects by the given property", () => {
        expect(Sort([{name : "b", name : "a"}], "name")).toEqual([{name : "a", name : "b"}]);
    });

    it("should sort an array of objects by the given property and revert", () => {
        expect(Sort([{name : "b", name : "a"}], "name", true)).toEqual([{name : "b", name : "a"}]);
    });
});