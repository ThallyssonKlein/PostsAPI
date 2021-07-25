import apisauce from "apisauce";

const API = apisauce.create({
    baseURL: "https://api.hatchways.io"
});

export async function FetchData(tags){
    let posts = [];

    for(let tag of tags.split(",")){
        const apiResponse = await API.get("/assessment/blog/posts", {tag});
        if(apiResponse.data){
            posts = posts.concat(apiResponse.data.posts);
        }
    }

    return posts;
}