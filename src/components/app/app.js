import React from "react";
import AppHeader from "../header";
import SearchPanel from "../search-panel";
import PostStatusFilter from "../post-status-filter";
import PostList from "../post-list";
import PostAddForm from "../post-add-form";

import "./app.css";

const App = () => {



    const data = [
        {label: 'lets learn react', important: true, id: 'fw12'},
        {label: 'Lorem ipsum dolor sit amet', important: false, id: 'das124'},
        {label: 'Consectetur adipiscing elit. In diam.', important: false, id: 'bmvkn8'},
        {label: 'Neque porro quisquam est qui dolorem ipsum ', important: false, id: 'mbgf74'}
    ]

    return (
        <div className="app">
            <AppHeader/>
            <div className="search-panel d-flex">
                <SearchPanel/>
                <PostStatusFilter/>
            </div>
            <PostList posts={data} />
            <PostAddForm/>
        </div>
        )
}

export default App;