/* eslint-disable */
import React from 'react';
import { signInWithPopup, signInWithEmailAndPassword } from 'firebase/auth';
import { auth, googleProvider } from '../../config/firebase';
import useAlert from '../../hooks/UseAlert';
import StyledLogin from './StyledLogin';
import { useNavigate } from 'react-router';
import { useAuth } from '../../hooks/AuthContext';

export default function Login() {
  const { AlertComponet, displayAlert, alertMsg } = useAlert();
  const [formData, setFormData] = React.useState({
    email: '',
    password: '',
  });

  const { currentUser } = useAuth();

  const navigate = useNavigate();

  const LoginWithEmailPassword = async () => {
    const { email, password } = formData;

    if (!email || !password) {
      displayAlert('input all fields');
      return;
    }

    await signInWithEmailAndPassword(auth, email, password)
      .then((res) => {
        console.log('email password signup res', res);
        displayAlert('signed in');
        navigate('/', { replace: true });
      })
      .catch((e) => console.log(e)); // takes 3 parameters auth eamil and password
  };

  const googleLogin = async () => {
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
    console.log('this currentuser in login', currentUser);
  }, [currentUser]);

  return (
    <StyledLogin>
      {alertMsg.show && <AlertComponet />}

      <div className="form_field">
        <p>login to account</p>

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
          onClick={LoginWithEmailPassword}
        >
          Login with Email
        </button>

        <button className="singin_btn" type="button" onClick={googleLogin}>
          Google Login
        </button>
      </div>
    </StyledLogin>
  );
}
