import React, { Component } from 'react';
import Dropzone from 'react-dropzone'

import '../css/main.css';

class ShareMemory extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "",
      fileAsDataURL: ""
    }
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
                <form>
                  <div class="form-group">
                    <label for="name">Your name:</label>
                    <input type="text" class="form-control" id="name" placeholder="John Johnson"
                      onChange={ (e) => { this.setState({ name: e.target.value }) } }
                    />
                  </div>
                  <button type="submit" class="btn btn-primary" disabled>Beam me up, scotty</button>
                </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ShareMemory;
