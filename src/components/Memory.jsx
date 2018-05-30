import React, { Component } from 'react';

class Memory extends Component {
  constructor(props) {
    super(props);

    this.state = {
    }
  }

  render() {
    return (
      <div class="memory">
        <div class="image">
          <img alt="" src={ this.props.src } />

          <div class="overlay">
            <span class="author"><i class="fas fa-user-astronaut"></i> Shared by: <strong>{ this.props.author }</strong></span>
          </div>
        </div>
      </div>
    );
  }
}

export default Memory;
