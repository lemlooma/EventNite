import React from "react";

function ProfileWelcome({ username, email }) {
  return (
    <>
      <div className={`profile-image-container`}>
        <img
          alt={`img`}
          className={"profile-image"}
          src={
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTEDkuWj-NptUtUtELceffh2mJFjqqJn_2H4BZALsqVUSYXiP3rhQBTbvX09VEauipfdsQ&usqp=CAU"
          }
        ></img>
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          marginTop: "30px",
        }}
      >
        <h3>Welcome back, {username}!</h3>
        <div>
          <h4>Username: {username}</h4>
          <h4>Email: {email}</h4>
        </div>
      </div>
    </>
  );
}

export default ProfileWelcome;
