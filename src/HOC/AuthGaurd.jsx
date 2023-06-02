/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { useAuth } from '../hooks/AuthContext';

const AuthGaurd = (Component) => {
  return function Gaurd(props) {
    const { currentUser } = useAuth();

    const [user, setUser] = React.useState(null);

    React.useEffect(() => {
      if (currentUser) setUser(currentUser);
    }, [currentUser]);

    // console.log('this currentUser in Hoc', currentUser);

    return user ? (
      <Component {...props} currentUser={user} />
    ) : (
      <p>Loading...</p>
    );
  };
};

export default AuthGaurd;
