import React, { Component}  from 'react';
import $ from "jquery";
import config from "../config";

/**
 * Component class renders login screen
 */
class Index extends Component {

    constructor(props) {

        super(props);

        this.state = {
            posts: []
        }

        this.getServerData();
    }

    getServerData() {
        $.getJSON(config.Server.serverURL + "post/get/all", "").then(response => this.setState({
            posts: response
        }));
    }

    /**
     * render HTMl Code
     * @returns html code
     */
    render() {
        let posts = [];
        for(let p in this.state.posts) {
            posts.push(
            <div className={"postContainer"}>
                <div className={"postContent"}>Author: {this.state.posts[p].author}</div>
                <div className={"postContent"}>Title: {this.state.posts[p].title}</div>
                <div className={"postContent"}>Content: {this.state.posts[p].content}</div>
            </div>);
        }

        return (
            <div>
                <h1>Index</h1>
                {posts}
            </div>
        )
    }
}

export default Index;