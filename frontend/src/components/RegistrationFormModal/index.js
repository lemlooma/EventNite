import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";

import { Modal } from "../../context/Modal";
import RegistrationForm from "./RegistrationForm";
import {  unregisterEvent } from "../../store/events";
import { useSelector, useDispatch } from "react-redux";

function RegistrationFormModal({ event }) {
  const [showModal, setShowModal] = useState(false);
  const [eventState, setEventState] = useState({});
  const sessionUserId = useSelector((state) => state.session.user?.id);
  const dispatch = useDispatch();

  useEffect(() => {
    setEventState(event);
  }, [event]);
  const registerd =
    +sessionUserId ===
    +eventState?.Registrations?.find((r) => +r.userId === +sessionUserId)
      ?.userId;

  const unregister = () => {
    dispatch(unregisterEvent(eventState.id));
    setEventState({
      ...eventState,
      Registrations: eventState?.Registrations.filter(
        (r) => +r.userId !== +sessionUserId
      ),
    });
  };
  console.log(event, registerd);
  return (
    <>
      {registerd ? (
        <NavLink className="nav-link" to={"#"} onClick={() => unregister()}>
          Cancel Registration
        </NavLink>
      ) : (
        <NavLink
          className="nav-link"
          to={"#"}
          onClick={() => setShowModal(true)}
        >
          Register
        </NavLink>
      )}
      {showModal && (
        <Modal onClose={() => setShowModal(false)}>
          <RegistrationForm event={eventState} setEvent={setEventState} />
        </Modal>
      )}
    </>
  );
}

export default RegistrationFormModal;
