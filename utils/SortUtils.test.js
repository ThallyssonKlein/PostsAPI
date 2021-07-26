import { Sort } from "./SortUtils.js";

describe("testing SortUtils", () => {
    it("should sort an array of objects by the given property", () => {
        expect(Sort([{name : "b"}, {name : "a"}], "name")).toEqual([{name : "a"}, {name : "b"}]);
    });
});