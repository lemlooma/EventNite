import React from 'react';
import { NavLink } from 'react-router-dom';
import { useDispatch,useSelector } from 'react-redux';

import SignupFormModal from '../SignupFormModal'
import LoginFormModal from '../LoginFormModal';
import { useHistory } from 'react-router';


import * as sessionActions from '../../store/session';



function Navigation({ isLoaded }){
  const eventNite = "https://i.imgur.com/35II3Nw.png"
  const sessionUser = useSelector(state => state.session.user);
  const dispatch = useDispatch();
  const history = useHistory()
  // log out button functionality
  const logout = (e) => {
    e.preventDefault();
    dispatch(sessionActions.logout());
    history.push('/')
  };

// declare variable to store which links to render
  let sessionLinks;
  if (sessionUser) { // if logged in, only show Profile button
    sessionLinks = (
      <>
      <NavLink className="nav-link" to="/newevent" style={{ marginLeft: '.5rem'}}>Create Event</NavLink>
      <NavLink className="nav-link" to="/profile" style={{ marginLeft: '.5rem' }}> Profile </NavLink>
      <NavLink onClick={logout} className="nav-link" to="/" style={{ marginLeft: '.5rem' }}>Log Out</NavLink>
      </>
    );
  } else { // else, render login & signup links instead
    sessionLinks = (
      <>
        <LoginFormModal />
        <SignupFormModal />
      </>
    );
  }

  return (
    <div className={`nav`}>  
        <div className={`nav-bar-fixed`}>
            <NavLink exact to="/"> 
              <img alt={`eventnite`} className='eventNite' src={`${eventNite}`}></img> 
            </NavLink>
        </div>
        <div className={`nav-bar-links`}>
            {isLoaded && sessionLinks}
        </div>
    </div>
    
  );
}

export default Navigation;


