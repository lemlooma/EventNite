import React, { useState } from "react";
import * as sessionActions from "../../store/session";
import { useDispatch } from "react-redux";

function LoginForm() {
  const dispatch = useDispatch();
  const [credential, setCredential] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setErrors([]);
    return dispatch(sessionActions.login({ credential, password })).catch(
      async (res) => {
        const data = await res.json();
        if (data && data.errors) setErrors(data.errors);
      }
    );
  };

  const demoLogin = () => {
    const credential = 'Demo-lition'
    const password = 'password'
    return dispatch(sessionActions.login({ credential, password }))
      .catch(async (res) => {
        const data = await res.json();
        if (data && data.errors) setErrors(data.errors);
      });
  }

  return (
       <>
      <div className={`flex-container`}>
        <form className='modal' onSubmit={handleSubmit}>
          <ul>
            { errors && errors.map((error, idx) => <li key={idx} style={{color: 'red'}}>{error}</li>)}
          </ul>
            <input
              type="text"
              value={credential}
              placeholder= "Username or Email"
              onChange={(e) => setCredential(e.target.value)}
              required
            />
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          <button type="submit">Log In</button>
          <button onClick={() => demoLogin()}>Log In As Demo User</button>
      </form>
     </div>
    </>
  );
}

export default LoginForm;