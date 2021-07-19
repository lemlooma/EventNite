// import React, { useEffect } from 'react';
// import { useSelector, useDispatch } from 'react-redux';

// // import { getEvents, getFavorites  } from '../../store/events';
// // import MainPageEvents from '../MainPageEvents';
// // import MainPageBanner from '../MainPageBanner';


// function HomePage(){
//   const dispatch = useDispatch();

//   // load all events into events state
// //   useEffect(()=>{
// //     dispatch(getEvents())
// //     dispatch(getFavorites())
// //   }, [dispatch])

//   // pull out list of events from state
//   const events = useSelector(state => state.events.eventsList);
//   const sessionUser = useSelector(state => state.session.user);
//   const favorites = useSelector(state => state.events.favorites);

//   // extract category names from events
//   const categoryNames = events.map(e => e.Category.category)

//   // simplify categoryNames into array of unique category names
//   const categories = [];
//   categoryNames.forEach(category => {
//     if(!categories.includes(category)){
//       categories.push(category);
//     }
//   })

//   // pass categories and events to children components
//   return (
//     <div className={`body`}>
//       <MainPageBanner categories={categories} events={events}/>
//       <MainPageEvents favorites={favorites} user={sessionUser} categories={categories} events={events}/>
//     </div>
//   );
// }

// export default MainPage;
