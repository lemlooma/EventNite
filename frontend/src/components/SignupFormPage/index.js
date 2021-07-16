import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';

import { Modal } from '../../context/Modal';
import SignupForm from './SignupForm';

function SignupFormModal() {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <NavLink className="nav-link" to={'#'} onClick={() => setShowModal(true)}>Signup</NavLink>
      {showModal && (
        <Modal onClose={() => setShowModal(false)}>
          <SignupForm />
        </Modal>
      )}
    </>
  );
}

export default SignupFormModal;

