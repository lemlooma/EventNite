import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';

import { Modal } from '../../context/Modal';
import RegistrationForm from './RegistrationForm';

function RegistrationFormModal({event}) {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <NavLink className="nav-link" to={'#'} onClick={() => setShowModal(true)}>Register</NavLink>
      {showModal && (
        <Modal onClose={() => setShowModal(false)}>
          <RegistrationForm event={event}/>
        </Modal>
      )}
    </>
  );
}

export default RegistrationFormModal;
