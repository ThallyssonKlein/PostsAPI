import { fetchByTag } from "../repository/FetchDataRepository.js";

export async function FetchData(tags){
    let posts = [];

    for(let tag of tags.split(",")){
        const apiResponse = await fetchByTag(tag);
        if(apiResponse){
            posts = posts.concat(apiResponse.posts);
        }
    }

    return posts;
}