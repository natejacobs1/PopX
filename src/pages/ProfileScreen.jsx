import React from 'react';

const ProfileScreen = () => {
  return (
    <div className="profile-page-container">
      <div className="profile-header">
        <h2>Account Settings</h2>
      </div>

      <div className="profile-details-card">
        <div className="profile-pic-container">
          <img 
            src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=2564&auto=format&fit=crop" 
            alt="Profile" 
            className="profile-pic" 
          />
          <div className="camera-icon">📷</div>
        </div>
        <div className="profile-info">
          <h3>Marry Doe</h3>
          <p>Marry@Gmail.Com</p>
        </div>
      </div>
      
      <div className="profile-description">
        <p>
  Lorem Ipsum Dolor Sit Amet, Consetetur Sadipscing <br />
  Elitr, Sed Diam Nonumy Eirmod Tempor Invidunt Ut <br />
  Labore Et Dolore Magna Aliquyam Erat, Sed Diam
</p>

      </div>
      
      <hr className="divider" />
    </div>
  );
};

export default ProfileScreen;