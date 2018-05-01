import React, {Component} from 'react';
import config from "../config";
import $ from "jquery";

/**
 * Component class renders login screen
 */
class Login extends Component {

    constructor(props) {
        super(props);
    }

    setLogin() {
        if ((document.getElementById("name").value === "") || (document.getElementById("password").value === "")) {
            console.log("Nicht alle Felder ausgefüllt");
        } else {
            this.login();
        }
    }

    login() {
        console.log("Logging in..");
        let data = $("form").serialize();
        $.post(config.Server.serverURL + "api/user/login", data).promise().then(this.props.setState(this.props.STATES.index));
    }

    /**
     * render HTMl Code
     * @returns html code
     */
    render() {
        return (
            <div className={"container"}>
                <div className={"col-lg-6"}>
                    <form>
                        <div className={"row"}>
                            <div className={"col-lg-6"}>
                                <label htmlFor={"name"}>Username:</label>
                            </div>
                            <div className={"col-lg-6"}>
                                <input type={"text"} id={"name"} name={"name"} placeholder={"username"}/>
                            </div>
                        </div>
                        <div className={"row"}>
                            <div className={"col-lg-6"}>
                                <label htmlFor={"name"}>Password:</label>
                            </div>
                            <div className={"col-lg-6"}>
                                <input type={"password"} id={"password"} name={"password"}/>
                            </div>
                        </div>
                        <div className={"row"}>
                            <button type={"button"} onClick={() => this.setLogin()} className="btn btn-primary float-right">Login</button>
                        </div>
                        <div className={"row"}>
                            <button type={"button"} onClick={() => this.props.setState(this.props.STATES.register)} className="btn btn-secondary float-right">Register</button>
                        </div>
                    </form>
                </div>
            </div>
        );
    }
}

export default Login;