import $ from "jquery";
import React, { Component }  from 'react';

import Browser from './Browser';
import ShareMemory from './ShareMemory';
import config from "../config";

/**
 * Component class renders login screen
 */
class Index extends Component {

    constructor(props) {

        super(props);

        this.state = {
            message: "",
            posts: []
        }

        this.getServerData();
    }

    getServerData() {
        $.getJSON(config.Server.serverURL + "index", "").then(response => {
           this.setState({
               message: response.message
           })
        });

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
                <div class="container">
                  <div class="row">
                    <div class="col-sm">
                      <ShareMemory />
                      <Browser />
                    </div>
                  </div>
                </div>

                <h1>{this.state.message}</h1>

                {posts}
            </div>
        )
    }
}

export default Index;
