import React, { Component}  from 'react';

/**
 * Component class renders login screen
 */
class Index extends Component {

    constructor(props) {

        super(props);
        this.checkLoggedIn();
    }

    checkLoggedIn() {

    }

    /**
     * render HTMl Code
     * @returns html code
     */
    render() {
        return (
            <h1>Index</h1>
        )
    }
}

export default Index;