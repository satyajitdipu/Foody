import React, { useState,useEffect } from 'react';
import '../component/log.scss';


function Login() {
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((data) => {
        localStorage.setItem("userDetails", JSON.stringify(data))
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    const users = JSON.parse(localStorage.getItem('userDetails'));


    const user = users.find((u) => u.email === email && u.username === password);

    if (user) {
      localStorage.setItem("userg", JSON.stringify(user));
      localStorage.setItem("userstatus",true)
      window.location.href = '/';
    } else {
      alert('Invalid email or password');
    }
  };

  return (
    <div className="Auth-form-container">
      <form className="Auth-form" onSubmit={handleSubmit}>
        <div className="Auth-form-content">
          <h3 className="Auth-form-title">Sign In</h3>
          <div className="form-group mt-3">
            <label>Email address</label>
            <input
              type="email"
              className="form-control mt-1"
              placeholder="Enter email"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
            />
          </div>
          <div className="form-group mt-3">
            <label>Password</label>
            <input
              type="password"
              className="form-control mt-1"
              placeholder="Enter password"
              value={password}
              onChange={(event) => setPassword(event.target.value)}
            />
          </div>
          <div className="d-grid gap-2 mt-3">
            <button type="submit" className="btn btn-primary">
              Submit
            </button>
          </div>
          <p className="forgot-password text-right mt-2">
            Forgot <a href="javascript:void(0)">password?</a>

          </p>
        </div>
      </form>
    </div>
  );
}

export default Login;
