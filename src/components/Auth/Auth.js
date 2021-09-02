import React from "react";
import Nn from "./Signin";
import Up from "./Signup";
import axios from "axios";
import store from "../../store/index";

export default class auth extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      tab: "signin",
    };
  }

  signin = (email, password) => {
    console.log(email, password);
    axios
      .post("/api/users/login", { email, password })
      .then((res) => {
        if (res.data.success) {
          store.dispatch({
            type: login,
            _id: res.data.user._id,
            user: res.data.user,
            token: res.data.token,
          });
          this.props.history.push("/dashboard");
        }
      })
      .catch((er) => {
        console.log(er);
      });
  };

  signup = ({ firstname, lastname, email, password }) => {
    axios
      .post("/api/users/register", { email, password, firstname, lastname })
      .then((res) => {
        if (res.data.success) {
          this.setState({ tab: "signin" });
        }
      })
      .catch((er) => {
        console.log(er);
      });
  };

  render() {
    let page =
      this.state.tab === "signin" ? (
        <Nn signin={this.signin} />
      ) : (
        <Up signup={this.signup} />
      );
    return (
      <div className="auth-wrapper">
        <div className="left"></div>
        <div className="right">
          <div className="head1">Quiz</div>
          <div className="head2">Welcome to my quiz</div>
          {page}
          <div
            className="butt"
            onClick={() => this.setState({ tab: "signup" })}
          >
            {" "}
            Signup
          </div>
        </div>
      </div>
    );
  }
}
