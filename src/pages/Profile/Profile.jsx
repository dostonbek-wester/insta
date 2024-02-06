import React from 'react'
import './Profile.css'
import profile from "./../../assets/profile.png"

function Profile() {
  return (
    <div className="profile-container">
      <img src={profile} alt="" />
    </div>
  )
}

export default Profile