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
      <form className='modal-form' onSubmit={handleSubmit}>
        <ul>
          { errors && errors.map((error, idx) => <li key={idx} style={{color: 'red'}}>{error}</li>)}
        </ul>
        <label>
          Username
        </label>
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
        <label>
          Email
        </label>
          <input
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        <label>
          Password
        </label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        <label>
          Confirm Password
        </label>
          <input
            type="password"
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
