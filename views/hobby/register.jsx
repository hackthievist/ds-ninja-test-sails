import React, { Component } from "react";

export default class Login extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      password: ""
    };
  }

  validateForm() {
    return this.state.email.length > 0 && this.state.password.length > 0;
  }

  handleChange(event) {
    this.setState({
      [event.target.id]: event.target.value
    });
  }

  handleSubmit(event) {
    event.preventDefault();
  }

  render() {
    return (
      <div className="limiter">
        <title>Register - Hobby Lobby</title>
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

            <form method="post" action="/userCreate" className="login100-form validate-form">
              <span className="login100-form-title">
                Member Register
                    </span>

              <div className="wrap-input100 validate-input" data-validate="Valid username is required">
                <input className="input100" type="text" name="username" required placeholder="Username" />
                <span className="focus-input100"></span>
                <span className="symbol-input100">
                  <i className="fa fa-envelope" aria-hidden="true"></i>
                </span>
              </div>

              <div className="wrap-input100 validate-input" data-validate="Valid email is required">
                <input className="input100" type="email" name="email" required placeholder="Email Address" />
                <span className="focus-input100"></span>
                <span className="symbol-input100">
                  <i className="fa fa-envelope" aria-hidden="true"></i>
                </span>
              </div>

              <div className="wrap-input100 validate-input" data-validate="Valid phone number is required">
                <input className="input100" type="number" name="phone" pattern=".{11}" required placeholder="Phone Number" />
                <span className="focus-input100"></span>
                <span className="symbol-input100">
                  <i className="fa fa-envelope" aria-hidden="true"></i>
                </span>
              </div>

              <div className="wrap-input100 validate-input" data-validate="Password is required">
                <input className="input100" type="password" name="password" pattern=".{6,}" required placeholder="Password" />
                <span className="focus-input100"></span>
                <span className="symbol-input100">
                  <i className="fa fa-lock" aria-hidden="true"></i>
                </span>
              </div>

              <div className="container-login100-form-btn">
                <button className="login100-form-btn">
                  Register
                        </button>
              </div>

              

              <div className="text-center p-t-136">
                <a className="txt2" href="/login">
                  Login to your Account
                            <i className="fa fa-long-arrow-right m-l-5" aria-hidden="true"></i>
                </a>
              </div>
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