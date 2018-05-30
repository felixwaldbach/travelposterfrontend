import React, { Component } from 'react';

import Memory from './Memory';
import $ from 'jquery';
import config from "../config";

class Browser extends Component {
  constructor(props) {
    super(props);

    this.state = {
      posts: []
    }

    this.getServerData();
  }

  getServerData() {
    $.getJSON(config.Server.serverURL + "post/get/all", "").then((response) => {
      this.setState({
        posts: response.posts
      });
    });
  }

  render() {
    let posts = [];
    this.state.posts.forEach((post) => {
      posts.push(
        <Memory src={ config.Server.imageURL + post.filename } author={ post.name } key={ post._id } />
      );
    });

    return (
      <div class="browser">
        <h1>Browse existing memories</h1>

        <div class="container">
          <div class="row">
            <div class="col">
              { posts }
            </div>
          </div>
        </div>
      </div>
    );
  }

}

export default Browser;
