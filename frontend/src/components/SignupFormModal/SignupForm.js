import React, { useState } from 'react';
import { useDispatch } from 'react-redux';

import * as sessionActions from '../../store/session';

function SignupForm() {
  const dispatch = useDispatch();

  // form input states
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [errors, setErrors] = useState([]);

  // form submit handler
  const handleSubmit = (e) => {
    e.preventDefault();

    if(password === confirmPassword){
      setErrors([]);
      return dispatch(sessionActions.signup({ username, email, password }))
        .catch(async (res) => {
          const data = await res.json();
          if (data && data.errors) setErrors(data.errors);
        });
    }
    return setErrors(['Confirm Password field must match the password field.'])
  }

  return (
    <div className={`flex-container`}>
      <form className='modal' onSubmit={handleSubmit}>
        <ul>
          { errors && errors.map((error, idx) => <li key={idx} style={{color: 'red'}}>{error}</li>)}
        </ul>
          <input
            type="text"
            placeholder= "Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
            />
          <input
            type="text"
            placeholder= "Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
           />
          <input
            type="password"
            placeholder = "Confirm Password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            required
          />
        <button type="submit">Register</button>
      </form>
    </div>
  );
}

export default SignupForm;
