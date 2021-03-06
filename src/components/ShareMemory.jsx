import React, { Component } from 'react';
import Dropzone from 'react-dropzone'
import $ from "jquery";

import '../css/main.css';

import config from "../config";

class ShareMemory extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "",
      fileAsDataURL: ""
    }

    this.createPostButtonDisabled = this.createPostButtonDisabled.bind(this);
    this.createPost = this.createPost.bind(this);
  }

  _onDrop(acceptedFiles) {
    acceptedFiles.forEach(file => {
        const reader = new FileReader();
        reader.onload = () => {
            this.setState({
              fileAsDataURL: reader.result
            });
        };

        reader.onabort = () => console.log('file reading was aborted');
        reader.onerror = () => console.log('file reading has failed');

        reader.readAsDataURL(file);
    });
  }

  createPostButtonDisabled() {
      if(this.state.name === "" || this.state.fileAsDataURL === "") {
        return true;
      } else {
        return false;
      }
  }

  createPost(e) {
    var imageBase64Extracted = this.state.fileAsDataURL.split(",").pop();
    console.log(imageBase64Extracted);
    var data = {
      name: this.state.name,
      file: imageBase64Extracted
    };

    $.post(config.Server.serverURL + "post/fileupload", data, (response) => {
      this.setState({
        name: "",
        fileAsDataURL: ""
      });

      this.props.browserUpdateRequest();
    }, "json");
  }

  render() {
    return (
      <div class="share-memory">
        <h1>Do you have any memories to share?</h1>
        <div class="container justify-content-center">
          <div class="upload row"> 
            <div class="col-auto">
              <Dropzone
                accept="image/jpeg, image/png"
                onDrop={ (accepted) => { this._onDrop(accepted) } }
              >
                <div class="dropbox" style={ { 'backgroundImage': 'url(' + this.state.fileAsDataURL + ')' } }>
                </div>
                <i class="far fa-file-image"></i>
              </Dropzone>
            </div>
            <div class="col">
              <p class="align-middle">If you want to share one of your memories with your fellow TravelPosters, drag & drop an image into this area.</p>
                <div class="form-group">
                  <label for="name">Your name:</label>
                  <input type="text" class="form-control" id="name" placeholder="John Johnson"
                    onChange={ (e) => { this.setState({ name: e.target.value }) } }
                  />
                </div>
                <button class="btn btn-primary" onClick={ this.createPost } disabled={ this.createPostButtonDisabled() }>Beam me up, scotty</button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ShareMemory;
