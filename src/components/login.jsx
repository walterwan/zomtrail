import React, { Component } from 'react';
import SignInWith from './SignInWith';

class Login extends Component {
  constructor(props) {
    super(props);

    this.state = {
      agreed: false,
    };
  }

  handleCheckBox() {
    return (e) => {
      if (e.target.checked) {
        document.getElementById('signin-button')
          .style.display = 'flex';
      } else {
        document.getElementById('signin-button')
          .style.display = 'none';
      }
    };
  }

  render() {
    return (
      <div className='login-div'>
        <h2 className='login-title'>Welcome to Zomtrail</h2>
        <a className='login-tos-text' >Terms of Use
        </a>
        <div className='tos-checkbox'>
          <label className="mdl-checkbox mdl-js-checkbox" htmlFor = "checkbox1">
            <input type="checkbox" id="checkbox1"
              className="mdl-checkbox__input" onChange={this.handleCheckBox()}/>
            <span className="mdl-checkbox__label">I understand and agree to the ToS</span>
          </label>
        <SignInWith/>
        </div>
      </div>
    );
  }
}

export default Login;