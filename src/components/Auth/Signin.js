import React from "react";

export default class signin extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: ''
    }
  }
  render() {
    return (
      <div className="signin-wrapper">
          <h2>Signin</h2>
          <div className="form">
            <input type="text" placeholder="Email" value={this.state.email} onChange={e => this.setState({email: e.target.value})}/>
            <input type="password" placeholder="Password" value={this.state.password} onChange={e => this.setState({password: e.target.value})}/>
            <div className="btn" onClick={() => this.props.signin(this.state.email, this.state.password)}>Sign in</div>
          </div>
      </div>
    )
  }
}