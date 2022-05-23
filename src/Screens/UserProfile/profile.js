import React, { useState } from "react";
import "../UserProfile/profile.scss";

const Profile = () => {
  const [edit, setEdit] = useState(false);
  const [textColor, setTextColor] = useState("#124e78");

  const changeColor = () => {
    setEdit(true);
    setTextColor("#703d57");
  };

  return (
    <>
      <div className="profile">
        <div class="container">
          <div class="profile-box">
            <h2>Account Profile</h2>
            <h3 onClick={() => setEdit(true)}>Edit Profile</h3>
            {edit == false ? (
              <div class="box">
                <input disabled type="text" class="field" />
                <input disabled type="text" class="field" />
                <input disabled type="text" class="field" />
                <input disabled type="text" class="field" />
                <input disabled type="text" class="field" />
                <input disabled type="text" class="field" />
              </div>
            ) : null}

            {edit ? (
              <div class="box">
                <input type="text" class="field" placeholder="nadim" />
                <input type="text" class="field" />
                <input type="text" class="field" />
                <input type="text" class="field" />
                <input type="text" class="field" />
                <input type="text" class="field" />
                <div className="cont">
                  <button class="btn">Save</button>
                  <button onClick={() => setEdit(false)} class="btn">
                    Cancel
                  </button>
                </div>
              </div>
            ) : null}
          </div>
        </div>
      </div>
    </>
  );
};

export default Profile;
