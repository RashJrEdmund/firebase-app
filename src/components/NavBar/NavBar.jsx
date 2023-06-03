/* eslint-disable */
/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { useEffect, useState } from 'react';
import { useNavigate, useLocation } from 'react-router';
import { signOut } from 'firebase/auth';
import StyledNavBar from './StyledNavBar';
import { auth, googleProvider } from '../../config/firebase';
import useAlert from '../../hooks/UseAlert';
import { useAuth } from '../../hooks/AuthContext';
import Types from '../Types/Types';

export default function NavBar() {
  const navigate = useNavigate();
  const { AlertComponet, displayAlert, alertMsg } = useAlert();
  const [showTypes, setShowTypes] = useState(false);
  const [location, setLocation] = useState('/');
  const { currentUser } = useAuth();
  console.log('currentUser in navbar', currentUser);

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
  const { pathname } = useLocation();
  console.log('this path name', pathname);

  useEffect(() => {
    if (pathname.includes('photos')) {
      setLocation('photos');
    } else {
      setLocation('/');
    }
  }, []);

  return (
    <StyledNavBar
      location
      // photos={location === 'photos'}
      // profile={location === 'profile'}
    >
      {alertMsg.show && <AlertComponet />}

      <div className="container">
        <p className="logo_section" onClick={() => navigate('/')}>
          Home
        </p>

        <ul>
          <li className="profile" onClick={() => navigate('/profile')}>
            <span />
            Profile
          </li>
          <span
            style={{ position: 'relative' }}
            onMouseOver={() => setShowTypes(true)}
            onMouseOut={() => setShowTypes(false)}
          >
            <li
              className="photos"
              onClick={() => setShowTypes((prev) => !prev)}
            >
              types
            </li>

            {showTypes && <Types />}
          </span>
          <li onClick={handleLogout}>Logout</li>
        </ul>
      </div>
    </StyledNavBar>
  );
}
