import React from "react";

export default class signup extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      firstname: '',
      lastname: ''
    }
  }

  render() {
    return (
      <div className="signip-wrapper">
          <input type="text" placeholder="Email" value={this.state.email} onChange={e => this.setState({email: e.target.value})}/>
            <input type="password" placeholder="Password" value={this.state.password} onChange={e => this.setState({password: e.target.value})}/>
            <input type="text" placeholder="FirstName" value={this.state.firstname} onChange={e => this.setState({firstname: e.target.value})}/>
            <input type="password" placeholder="LastName" value={this.state.lastname} onChange={e => this.setState({lastname: e.target.value})}/>
          <div className="btn" onClick={() => this.props.signup({...this.state})}>
            Sign Up
          </div>
      </div>
    )
  }
}