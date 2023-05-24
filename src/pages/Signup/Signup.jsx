/* eslint-disable */
import React from 'react';
import { createUserWithEmailAndPassword, signInWithPopup } from 'firebase/auth';
import { auth, googleProvider } from '../../config/firebase';
import useAlert from '../../hooks/UseAlert';
import StyledSignup from './StyledSignup';

export default function Login() {
  const { AlertComponet, displayAlert, alertMsg } = useAlert();
  const [formData, setFormData] = React.useState({
    email: '',
    password: '',
  });

  const signUpWithEmailPassword = async () => {
    const { email, password } = formData;

    if (!email || !password) {
      displayAlert('input all fields');
      return;
    }

    try {
      await createUserWithEmailAndPassword(auth, email, password); // takes 3 parameters auth eamil and password
    } catch (err) {
      console.log(err);
    }
  };

  const gogoleSignUP = async () => {
    const { email, password } = formData;

    if (!email || !password) {
      displayAlert('input all fields');
      return;
    }

    try {
      await signInWithPopup(auth, googleProvider); // takes 2 parameters auth and googleProvider
    } catch (err) {
      console.log(err);
    }
  };

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
      </div>
    </StyledSignup>
  );
}
