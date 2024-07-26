import React, { useState } from 'react'
import './Login.css'
import { Link, useHistory } from 'react-router-dom';
import { auth } from './firebase';

function Login() {
  const history = useHistory();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const login = (event) => {
    event.preventDefault();
    auth.signInWithEmailAndPassword(email, password)
      .then((auth) => {
        history.push('/');
      }).catch(err => alert(err.message));
  }

  const register = (event) => {
    event.preventDefault();
    auth.createUserWithEmailAndPassword(email, password)
      .then(auth => {
        history.push('/');
      }).catch(err => alert(err.message));
  }
  return (
    <div className="login">
      <Link to="/">
        <img
          className="login__logo"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/263px-Amazon_logo.svg.png"
          alt=""
        />
      </Link>
      <div className="login__container">
        <h1>Sign in</h1>
        <form>
          <h5>E-mail</h5>
          <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
          <h5>Password</h5>
          <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
          <button type="submit" onClick={login} className="login__signInButton">Sign in</button>
        </form>
        <p>
          By signing-in you agree to Amazon's Conditions of Use & Sale. Please see our
          Privacy Notice, out Cookies Notice and our interest-based Ads Notice.
        </p>
        <button onClick={register} className="login__registerButton">Create your Amazon Account</button>
      </div>
    </div>
  )
}

export default Login
