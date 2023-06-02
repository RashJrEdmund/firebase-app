/* eslint-disable */
/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React from 'react';
import { useNavigate } from 'react-router';
import { signOut } from 'firebase/auth';
import StyledNavBar from './StyledNavBar';
import { auth, googleProvider } from '../../config/firebase';
import useAlert from '../../hooks/UseAlert';
import { useAuth } from '../../hooks/AuthContext';

export default function NavBar() {
  const navigate = useNavigate();
  const { AlertComponet, displayAlert, alertMsg } = useAlert();
  const location = useLocation();

  // const { currentUser } = useAuth();

  const handleLogout = async () => {
    await signOut(auth, googleProvider)
      .then((res) => {
        console.log('this signout res', res);
        navigate('/login', { replace: true });
      })
      .catch(() => {
        displayAlert('could not sign out');
      });
  };

  return (
    <StyledNavBar>
      {alertMsg.show && <AlertComponet />}

      <div className="container">
        <p className="logo_section">Movie App</p>

        <ul>
          <li onClick={() => navigate('/profile')}>Profile</li>
          <li onClick={() => navigate('/photos')}>Photos</li>
          <li onClick={handleLogout}>Logout</li>
        </ul>
      </div>
    </StyledNavBar>
  );
}
