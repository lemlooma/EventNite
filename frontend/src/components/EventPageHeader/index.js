import React from 'react';

import RegistrationFormModal from "../RegistrationFormModal";

function EventPageHeader({ event }){

  return (
    <div className={`event-header-container`}>
      <div className={`event-image-container`}>
        <img alt={`eventpic`} className={`event-image`} src={event.pic}></img>
      </div>
      <div className={`event-header-details`}>
        <div>
          <h2 style={{ textTransform: 'capitalize'}}>{event.name}</h2>
          <p>Location: {event.location}</p>
        </div>
        <div>
          <p className={`min-margin`}>Time: {event.time}</p>
          <p className={`min-margin`}>Price: ${event.ticketCost}</p>
        </div>
        <div className='event-register-button'>
          {/* <RegistrationFormModal event={event}/> */}
         </div>
      </div>
    </div>
  );
}

export default EventPageHeader;
