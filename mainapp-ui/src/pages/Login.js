import React, {useEffect, useState} from "react";
import { Redirect } from "react-router";
import 'bootstrap/dist/css/bootstrap.min.css';


const Login = ({setNameGlobal}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [redirect, setRedirect] = useState(false)
  useEffect(()=>setNameGlobal(undefined))
  const submit = async (e) =>{
    e.preventDefault();

    await fetch('http://127.0.0.1:8000/api/login', {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      credentials: 'include',
      body: JSON.stringify({
        email,
        password
      })
    });
    setRedirect(true)
  }
  if (redirect)
  return <Redirect to='/' />;
  return (
    <div>
    <main className="form-signin">
      <form onSubmit={submit}>
        <h1 className="h3 mb-3 fw-normal">Please sign in</h1>
        <input
          type="email"
          className="form-control"
          placeholder="name@example.com"
          required
          onChange={e => setEmail(e.target.value)}
        />
        <input
          type="password"
          className="form-control"
          placeholder="Password"
          required
          onChange={e => setPassword(e.target.value)}
        />
        <button className="w-100 btn btn-lg btn-primary" type="submit">
          Sign in
        </button>
      </form>
    </main>
    </div>
  );
};

export default Login;
