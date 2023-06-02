/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from '../config/firebase';
import Loader from '../components/Loader/Loader';

const AuthGaurd = (Component) => {
  return function Gaurd(props) {
    const [currentUser, setCurrentUser] = React.useState(false);

    React.useEffect(() => {
      const unsubscribe = onAuthStateChanged(auth, (user) => {
        if (user) {
          setCurrentUser({
            uid: user.uid,
            email: user.email,
            displayname: user.displayName,
          });
        } else setCurrentUser(null);
      });

      return () => unsubscribe;
    }, []);

    // console.log('this currentUser in Hoc', currentUser);

    return typeof currentUser !== 'boolean' ? (
      <Component {...props} currentUser={currentUser} />
    ) : (
      <Loader />
    );
  };
};

export default AuthGaurd;
