import React, { Component } from 'react';
import LoginForm from 'grommet/components/LoginForm';

class Login extends Component {
  render() {
    return (
      <LoginForm onSubmit={function(submit) {console.log(submit); }}
        title='Login'
        align={'center'} />
    );
  }
}

export default Login;