import React from "react";

const PostStatusFilter = () => {
    return (
        <div className="btn-group">
            <button type="button" className="btn btn-info">All articles</button>
            <button type="button" className="btn btn-outline-secondary">Liked</button>
        </div>
    )
}

export default PostStatusFilter;