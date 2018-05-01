import React, { Component}  from 'react';
import config from "../config";
import $ from "jquery";

/**
 * Component class renders login screen
 */
class Register extends Component {

    setRegister() {
        this.register();
    }

    register() {
        console.log("Logging in..");
        let data = $("form").serialize();
        $.post(config.Server.serverURL + "api/user/register", data).promise().then(this.props.setState(this.props.STATES.index));
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
                                <label htmlFor={"name"}>E-Mail:</label>
                            </div>
                            <div className={"col-lg-6"}>
                                <input type={"text"} id={"email"} name={"email"} placeholder={"email"} pattern={"[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$"}/>
                            </div>
                        </div>
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
                            <button type={"button"} onClick={() => this.setRegister()} className="btn btn-secondary float-right">Register</button>
                        </div>
                    </form>
                </div>
            </div>
        );
    }
}

export default Register;