// import ProfileWelcome from '../ProfileWelcome';
// import React, { useSelector,useEffect } from 'react';
// // import { NavLink } from 'react-router-dom';
// import { useDispatch } from 'react-redux';
// import { Redirect } from 'react-router-dom';

// function ProfileMain(){
//   const dispatch = useDispatch();
// const sessionUser = useSelector(state => state.session.user);
//   useEffect(()=> {
//     dispatch()
//   }, [dispatch])

//   return (
//     <div className="body">
//     { sessionUser && (
//       <div className='profile-grid-container'>
//         <div className='profile-settings-container'>
//           <ProfileWelcome username={sessionUser.username} email={sessionUser.email} />
//         </div>
//       </div>
//       )
//     }
//     { !sessionUser &&
//     <Redirect to="/" />
//     }
//   </div>
//   );
// }

// export default ProfileMain;