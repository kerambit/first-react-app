import React from "react";
import "./post-list.css";

import PostListItem from "../post-list-item"

const PostList = () => {
    return (
        <ul className="app-list group-list">
            <PostListItem/>
            <PostListItem/>
            <PostListItem/>
            <PostListItem/>
        </ul>
    )
}

export default PostList;