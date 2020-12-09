import React from "react";
import "./post-add-form.css";

const PostAddForm = ({onAdd}) => {
    return (
        <form className="bottom-panel d-flex">
            <input
                type="text"
                placeholder="Type your ideas"
                className="form-control new-post-label"
            />
            <button
                type="submit"
                className="btn btn-outline-secondary"
                onClick={() => onAdd('yeah')}
            >
                Add</button>
        </form>
    )
}

export default PostAddForm;