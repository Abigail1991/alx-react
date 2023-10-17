import React from 'react';
import './Login.css';

const Login = () => {
  return (
    <React.Fragment>
      <p>Login to access the full dashboard</p>
      <form>
        <label>
          Email:
          <input type="email" name="email" autoComplete="email" />
        </label>
        <label>
          Password:
          <input
            type="password"
            name="password"
            autoComplete="current-password"
          />
        </label>
        <button>OK</button>
      </form>
    </React.Fragment>
  );
};

export default Login;
