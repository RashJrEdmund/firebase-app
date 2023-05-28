/* eslint-disable */
import React from 'react';
import { createUserWithEmailAndPassword, signInWithPopup } from 'firebase/auth';
import { auth, googleProvider } from '../../config/firebase';
import useAlert from '../../hooks/UseAlert';
import StyledSignup from './StyledSignup';
import { useNavigate } from 'react-router';
import { useAuth } from '../../hooks/AuthContext';

export default function Signup() {
  const { AlertComponet, displayAlert, alertMsg } = useAlert();
  const [formData, setFormData] = React.useState({
    email: '',
    password: '',
  });

  const navigate = useNavigate();
  const { currentUser } = useAuth();

  const signUpWithEmailPassword = async () => {
    const { email, password } = formData;

    if (!email || !password) {
      displayAlert('input all fields');
      return;
    }

    try {
      await createUserWithEmailAndPassword(auth, email, password)
        .then((res) => {
          console.log('email password signup res', res);
          navigate('/', { replace: true });
        })
        .catch((e) => console.log(e)); // takes 3 parameters auth eamil and password
    } catch (err) {
      console.log(err);
    }
  };

  const gogoleSignUP = async () => {
    try {
      await signInWithPopup(auth, googleProvider)
        .then((res) => {
          console.log('google signup res', res);
          navigate('/', { replace: true });
        })
        .catch((e) => console.log(e)); // takes 2 parameters auth and googleProvider
    } catch (err) {
      console.log(err);
    }
  };

  React.useEffect(() => {
    console.log('this currentuser in Signup', currentUser);
  }, [currentUser]);

  return (
    <StyledSignup>
      {alertMsg.show && <AlertComponet />}

      <div className="form_field">
        <p>create account</p>

        <input
          name="email"
          type="text"
          placeholder="Email..."
          onChange={(e) =>
            setFormData((prev) => ({ ...prev, email: e.target.value }))
          }
        />
        <input
          name="password"
          type="password"
          placeholder="password..."
          onChange={(e) =>
            setFormData((prev) => ({ ...prev, password: e.target.value }))
          }
        />

        <button
          className="singin_btn"
          type="button"
          onClick={signUpWithEmailPassword}
        >
          sign up with Email
        </button>

        <button className="singin_btn" type="button" onClick={gogoleSignUP}>
          Google sign up
        </button>

        <p>already have an account? login</p>
      </div>
    </StyledSignup>
  );
}
