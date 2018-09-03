import React, { Component } from "react";

export default class Dashboard extends Component {
    constructor(props) {
        super(props);

        this.state = {
            title: "",
        };
    }


    render() {
        console.log(message);
        return (
            <div className="container">
                <title>Dashboard - Hobby Lobby</title>
                <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css"
                    integrity="sha384-BVYiiSIFeK1dGmJRAkycuHAHRg32OmUcww7on3RYdg4Va+PmSTsz/K68vbdEjh4u"
                    crossOrigin="anonymous" />
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

                <div className="page-header">
                    <h1>Hobby Lobby</h1>
                </div>

                <nav className="navbar navbar-default">
                    <div className="container-fluid">

                        <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
                            <ul className="nav navbar-left">
                                <li>
                                    <a href="/">Home</a>
                                </li>
                            </ul>

                            <ul className="nav navbar-right">
                                <li>
                                    <a>{username}</a>
                                </li>
                                <li>
                                    <a href="/logout">Log Out</a>
                                </li>
                                <li>

                                </li>
                            </ul>
                        </div>

                    </div>

                </nav>

                <div className="container row">
                    <h1>Hi, Welcome to your Dashboard</h1>
                </div>
                <hr />
                <form id="hobbyForm" method="POST">
                    <div className="form-group">
                        <p>
                            <input id="hobbyText" className="form-control" type="text" name="title" placeholder="Enter Hobby" required />
                            <input type="hidden" value={userId} name="owner" />
                        </p>
                        <br />
                        <button className="btn btn-primary" type="submit">
                            <span className="glyphicon glyphicon-plus-sign"></span>
                            Add Hobby
                            </button>
                    </div>

                </form>
                <h3 id="message"></h3>
                <h3 id="message2">{message}</h3>



                <script>
                    if(performance.navigation.type == 1) {
                        message = ''
                    }
                </script>

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
            </div >
        );
    }
}