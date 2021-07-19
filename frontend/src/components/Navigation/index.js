import React from 'react';
import { NavLink } from 'react-router-dom';
import { useDispatch,useSelector } from 'react-redux';
// import ProfileButton from './ProfileButton';
import SignupFormModal from '../SignupFormModal'
import LoginFormModal from '../LoginFormModal';


import * as sessionActions from '../../store/session';



function Navigation({ isLoaded }){
  const eventNite = "https://i.imgur.com/35II3Nw.png"
  const sessionUser = useSelector(state => state.session.user);
  const dispatch = useDispatch();
  // log out button functionality
  const logout = (e) => {
    e.preventDefault();
    dispatch(sessionActions.logout());
  };

// declare variable to store which links to render
  let sessionLinks;
  if (sessionUser) { // if logged in, only show Profile button
    sessionLinks = (
      <>
        <img alt={`eventNite`} style={{width: '18px', marginRight: '-2px'}} src="https://i.imgur.com/glIlOf0.png"></img>
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
            {/* <SearchForm /> */}
        </div>
        <div></div>
        <div className={`nav-bar-links`}>
            {isLoaded && sessionLinks}
        </div>
    </div>
  );
}

export default Navigation;


// <a href="https://imgur.com/35II3Nw"><img src="https://i.imgur.com/35II3Nw.png" title="source: imgur.com" /></a>

// <a href="https://imgur.com/glIlOf0"><img src="https://i.imgur.com/glIlOf0.png" title="source: imgur.com" /></a>
// <a href="https://imgur.com/1dr2qYY"><img src="https://i.imgur.com/1dr2qYY.jpg" title="source: imgur.com" /></a>