import React, { Component } from "react";

export default class Login extends Component {
    constructor(props) {
        super(props);
    }

    handleChange(event) {
        this.setState({
            [event.target.id]: event.target.value
        });
    }



    render() {

        return (
            <div className="limiter">
                <title>Home</title>
                <link rel="stylesheet" href="/dependencies/select2.css" />
                <link rel="stylesheet" href="/dependencies/select2.min.css" />
                <link rel="stylesheet" href="/styles/animate.css" />
                <link rel="stylesheet" href="/styles/bootstrap-grid.css" />
                <link rel="stylesheet" href="/styles/bootstrap-grid.min.css" />
                <link rel="stylesheet" href="/styles/bootstrap-reboot.css" />
                <link rel="stylesheet" href="/styles/bootstrap-reboot.min.css" />
                <link rel="stylesheet" href="/styles/bootstrap.css" />
                <link rel="stylesheet" href="/styles/bootstrap.min.css" />
                <link rel="stylesheet" href="/styles/hamburgers.css" />
                <link rel="stylesheet" href="/styles/hamburgers.min.css" />
                <link rel="stylesheet" href="/styles/importer.css" />
                <link rel="stylesheet" href="/styles/main.css" />
                <link rel="stylesheet" href="/styles/styles.css" />
                <link rel="stylesheet" href="/styles/util.css" />

                <div className="container-login100">
                    <div className="wrap-login100">
                        <div className="login100-pic js-tilt" data-tilt>
                            <img src="images/img-01.png" alt="IMG" />
                        </div>

                        <form className="login100-form validate-form">
                            <span className="login100-form-title">Hobby Lobby</span>

                            <div className="container-login100-form-btn">
                                <a className="login100-form-btn" href="/login">Login</a>
                            </div>

                            <div className="container-login100-form-btn">
                                <a className="login100-form-btn" href="/register">Register</a>
                            </div>
                            <br />

                        </form>
                    </div>
                </div>

                <script src="/dependencies/sails.io.js"></script>
                <script src="/dependencies/popper.js"></script>
                <script src="/dependencies/jquery-3.2.1.min.js"></script>
                <script src="/dependencies/bootstrap.min.js"></script>
                <script src="/dependencies/bootstrap.js"></script>
                <script src="/dependencies/main.js"></script>
                <script src="/dependencies/popper.min.js"></script>
                <script src="/dependencies/select2.js"></script>
                <script src="/dependencies/select2.min.js"></script>
                <script src="/dependencies/tilt.jquery.min.js"></script>
                <script src="/dependencies/tooltip.js"></script>
            </div>
        );
    }
}