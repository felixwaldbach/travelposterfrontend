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
        }
    }

    /**
     * render HTMl Code
     * @returns html code
     */
    render() {
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
            </div>
        )
    }
}

export default Index;
