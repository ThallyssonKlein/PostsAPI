import { FetchData } from "../service/FetchDataService.js";
import { Sort } from "../utils/SortUtils.js";
import { validationResult } from "express-validator";

export default async function Posts(req, res) {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }else{
        const tags = req.query.tags;
        const sortBy = req.query.sortBy;
        const direction = req.query.direction;
        
        let posts = await FetchData(tags);

        if(sortBy){
            posts = Sort(posts, sortBy);
            if(direction === "desc") {
                posts = posts.reverse();
            }
        }

        res.json(posts);
    }
}