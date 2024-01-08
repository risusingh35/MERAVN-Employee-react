import React from 'react';
import { getTokenLocStore, removeTokenLocStore } from "../service/localStorage"; 
const UserProfile = () => {
  const token = getTokenLocStore(); // Get the token or user information from local storage

  // Extract initials from the user's name or email
  const getInitials = (name) => {
    const names = name.split(' ');
    return names.map((n) => n.charAt(0)).join('').toUpperCase();
    // You may need to modify this logic to suit your user data structure
  };

  const handleLogout = () => {
    // Implement logout functionality - Clear token from local storage or perform logout logic
    removeTokenLocStore(); // For example, remove the token from local storage
    // Perform other logout operations if needed
  };

  return (
    <div className="user-profile">
      {token ? (
        <>
          <div className="user-initials" title="User Profile">RK</div>
          {/* <div className="user-initials" title="User Profile">{getInitials(token.userName)}</div> */}
          <div className="user-actions">
            <button className="logout-button" onClick={handleLogout}>Logout</button>
            <button className="settings-button">Settings</button>
          </div>
        </>
      ) : (
        // Show login or authentication component if the user is not logged in
        <div className="login-prompt">Please log in</div>
      )}
    </div>
  );
};

export default UserProfile;
