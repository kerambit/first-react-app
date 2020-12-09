import React from "react";
import "./post-list.css";

import PostListItem from "../post-list-item";

const PostList = ({posts, onDelete}) => {

    const elements = posts.map((item) => {
        const {id, ...itemProps} = item;
        return (
            <li key={id} className="list-group-item">
                <PostListItem
                    {...itemProps}
                    onDelete={() => onDelete(id)}
                />
            </li>
        )
    })

    return (
        <ul className="app-list group-list">
            {elements}
        </ul>
    )
}

export default PostList;