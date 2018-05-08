import React, { Component } from 'react';

import '../css/main.css';

class ShareMemory extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "",
      file: ""
    }
  }

  render() {
    return (
      <div class="share-memory">
        <h1>Do you have any memories to share?</h1>
        <div class="container justify-content-center">
          <div class="upload row">
            <div class="col-auto">
              <i class="far fa-file-image"></i>
            </div>
            <div class="col">
              <p class="align-middle">If you want to share one of your memories with your fellow TravelPosters, drag & drop an image into this area.</p>
                <form>
                  <div class="form-group">
                    <label for="name">Your name</label>
                    <input type="text" class="form-control" id="name" placeholder="John Johnson"
                      onChange={ (e) => { this.setState({ name: e.target.value }) } }
                      value={ () => { return this.state.name; } }
                    />
                  </div>
                  <button type="submit" class="btn btn-primary">Beam me up, scotty</button>
                </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ShareMemory;
