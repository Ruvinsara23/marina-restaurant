import { UserContext } from '../../contexts/user.context';
import { useContext } from 'react';
import  './user-details.scss';

const UserDetails = () => {
  const { currentUser } =  useContext (UserContext);

  return (
    <div className="user-details-container">
      <div className="user-profile">
       
        <div className="user-info">
          <h2 className="user-name">{currentUser.displayName}</h2>
          <h5 className="user-email">{currentUser.email}</h5>
        </div>
      </div>

      <div className="user-details">
        <div className="detail-section">
          <h3>Contact Information</h3>
          <div className="detail-item">
            <span className="label">Address:</span>
            <span>{currentUser.address || 'N/A'}</span>
          </div>
          <div className="detail-item">
            <span className="label">Phone:</span>
            <span>{currentUser.phoneNumber || 'N/A'}</span>
          </div>
          <div className="detail-item">
            <span className="label">Email:</span>
            <span>{currentUser.email}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserDetails;
