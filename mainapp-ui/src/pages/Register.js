import React, {useState} from "react";
import { Redirect } from "react-router";

const Register = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [redirect, setRedirect] = useState(false)
  const submit = async (e) => {
    e.preventDefault()
    await fetch('http://127.0.0.1:8000/api/register', {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({
        name,
        email,
        password
      })
    })

    setTimeout(()=>setRedirect(true), 1000)
  }
  if (redirect)
  return <Redirect to='login' />;

  return (
    <div>
    <main className="form-signin">
      <form onSubmit={submit}>
        <h1 className="h3 mb-3 fw-normal">Please Register</h1>
        <input
          type="text"
          className="form-control"
          placeholder="Name"
          required
          onChange={e => setName(e.target.value)}
        />
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
          Submit
        </button>
      </form>
    </main>
    </div>
  );
};

export default Register;
