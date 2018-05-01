import React, {Component} from 'react';
import './App.css';

import Login from './components/Login';
import Register from './components/Register';
import Index from './components/Index';
import Post from './components/Post';
import Logout from './components/Logout';

class App extends Component {

    /**
     * Constructor with State ENUM
     * @param props from super
     * state containes:
     * ENUM with all states/screens
     * screen => actual screen
     */
    constructor(props) {
        super(props);
        //ENUM with states
        this.STATES = Object.freeze({
            "login": 0, "logout": 1, "register": 2,
            "index": 10, "post": 11
        })
        this.state = {
            screen: this.STATES.login,
            login: false,
            user: null
        }
    }

    /**
     * Function to update state from underling components
     * @param state
     */
    updateState(state) {
        console.log("Updating state");
        this.setState({
            screen: state,
            login: this.state.login
        });
    }

    /**
     * Return the actual screen component
     * @returns {string} actual component
     */
    returnState() {
        console.log("Returning state");
        switch (this.state.screen) {
            case this.STATES.login:
                return <Login STATES={this.STATES} setState={i => this.updateState(i)}/>;
            case this.STATES.logout:
                return <Logout STATES={this.STATES} setState={i => this.updateState(i)}/>;
            case this.STATES.register:
                return <Register STATES={this.STATES} setState={i => this.updateState(i)}/>;
            case this.STATES.index:
                return <Index STATES={this.STATES} setState={i => this.updateState(i)}/>;
            case this.STATES.post:
                return <Post STATES={this.STATES} setState={i => this.updateState(i)}/>;
            default:
                return "FALSE STATE!";
        }
    }

    /**
     * render HTMl Code
     * @returns html code
     */
    render() {
        return (
            <div className="App">
                <header>
                    <Menu STATES={this.STATES} wert={"echo"} setState={i => this.updateState(i)}/>
                </header>
                <main>
                    {this.returnState()}
                </main>
                <footer className="page-footer font-small mdb-color stylish-color-dark fixed-bottom">
                    <div className="footer-copyright py-3 text-center">
                        © 2018 Copyright: Felix Waldbach & Marius Kießling
                    </div>

                </footer>
            </div>
        );
    }
}

/**
 * Menu component class
 * render the menu for all app screens
 */
class Menu extends Component {
    /**
     * render HTMl Code
     * @returns html code
     */
    render() {
        return (

            <div className="container-fluid p-0 mb-4">
                <div className={"headerImg"}>
                </div>
                <nav className="navbar navbar-expand-sm bg-dark navbar-dark">
                    <div className={"container"} id={"navbarContainer"}>
                        <button onClick={() => this.props.setState(this.props.STATES.index)}
                                className={"btn-link navbar-brand pl-0"}>Travelposter
                        </button>
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <button onClick={() => this.props.setState(this.props.STATES.login)}
                                        className="nav-link btn-link">Login
                                </button>
                            </li>
                            <li className="nav-item">
                                <button onClick={() => this.props.setState(this.props.STATES.register)}
                                        className="nav-link btn-link">Register
                                </button>
                            </li>
                            <li className="nav-item">
                                <button onClick={() => this.props.setState(this.props.STATES.index)}
                                        className="nav-link btn-link">Index
                                </button>
                            </li>
                            <li className="nav-item">
                                <button onClick={() => this.props.setState(this.props.STATES.post)}
                                        className="nav-link btn-link">Post
                                </button>
                            </li>
                            <li className="nav-item">
                                <button onClick={() => this.props.setState(this.props.STATES.logout)}
                                        className="nav-link btn-link">Logout
                                </button>
                            </li>
                        </ul>
                    </div>
                </nav>
            </div>

        );
    }

}

export default App;
