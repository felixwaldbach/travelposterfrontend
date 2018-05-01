import React, {Component, Input} from 'react';
import $ from 'jquery';
import config from "../config";


/**
 * Class displays the WineAdd React Component which displays
 * the form to add a supplier
 */

class Post extends Component {

    /**
     * The constructor calls the function checkUpdateID and getServerData()
     * @param props to get this.props.updateID
     * The app state includes
     * Array[][] tableBody - two dimensional array contains suppliers
     */
    constructor(props) {

        super(props);
        this.state = {
        }
        this.getServerData();
    }

    /**
     * function controls the input fields and decides
     * wether a wine will be added or updated
     */
    setPost() {
        if ((document.getElementById("title").value === "") || (document.getElementById("content").value === "")) {
            console.log("Nicht alle Felder ausgefüllt");
        } else {
            this.addPost();
        }
    }

    /**
     * gets the supplier and creates the optionlist for the supplier-select
     */
    getServerData() {
        $.getJSON(config.Server.serverURL + "user/get", "").then(response => {
            this.setState({
                user: response
            });
        });
    }

    /**
     * adds a wine to the database
     */
    addPost() {
        console.log("Adding post..");
        let data = $("form").serialize();
        console.log(data);
        $.post(config.Server.serverURL + "post/add", data).promise().then(this.props.setState(this.props.STATES.index));
    }


    /**
     * Render React Component
     * @returns  html code
     */
    render() {
        return (
            <div className={"container"}>
                <h2>Create a new Post</h2>
                <form className={"form-horizontal"}>
                    <div className={"row"}>
                        <div className={"col-lg-4"}>
                            <div className={"form-group row"}>
                                <input type="hidden" className="form-control sm-10" id="username" name="username" value={"test"}/>
                                <label className={"control-label col-sm-4 col-form-label"}>Title</label>
                                <div className={"col-sm-8"}>
                                    <input type="text" className="form-control sm-10" id="title" name="title"/>
                                </div>
                            </div>
                        </div>
                        <div className={"col-lg-12"}>
                            <div className={"form-group row"}>
                                <label className={"control-label col-sm-4 col-form-label"}>Content</label>
                            </div>
                        </div>
                        <div className={"col-lg-12"}>
                            <textarea className="form-control col-sm-12" id="content" name="content"/>
                        </div>
                        <div className={"col-lg-12"}/>
                        <div className={"col-lg-12"}>
                            <button type="button" onClick={() => this.setPost()} className="btn btn-primary float-right">Post it</button>
                            <button type="cancel" className="btn btn-secondary float-right">Cancel</button>
                        </div>
                    </div>
                </form>
            </div>
        );
    }
}

export default Post;