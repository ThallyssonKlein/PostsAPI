import apisauce from "apisauce";

const API = apisauce.create({
    baseURL: "https://api.hatchways.io"
});

export async function fetchByTag(tag) {
    const apiResponse = await API.get("/assessment/blog/posts", {tag});
    return apiResponse.data;
}