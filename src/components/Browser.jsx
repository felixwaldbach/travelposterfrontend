import React, { Component } from 'react';

import Memory from './Memory';

class Browser extends Component {
  constructor(props) {
    super(props);

    this.state = {
    }
  }

  render() {
    return (
      <div class="browser">
        <h1>Browse existing memories</h1>

        <div class="container">
          <div class="row">
            <div class="col">
              <Memory src="https://images.unsplash.com/photo-1516073762189-e915e8248a2d?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=0c88660471b22d3c3b70faef2d57189d&auto=format&fit=crop&w=2100&q=80" author="Marius Kießling" />

            <Memory src="https://images.unsplash.com/photo-1491308056676-205b7c9a7dc1?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=a4dc6385e23451fd8aa3458688757100&auto=format&fit=crop&w=1953&q=80" author="Marius Kießling" />
            </div>
          </div>
        </div>
      </div>
    );
  }

}

export default Browser;
