import React from 'react';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../config/firebase';
import useAlert from '../hooks/UseAlert';

export default function Auth() {
  const { AlertComponet, displayAlert, alertMsg } = useAlert();

  const signIn = async (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;

    if (!email || !password) {
      displayAlert('input all fields');
      return;
    }

    await createUserWithEmailAndPassword(auth, email, password);
  };

  return (
    <div className="auth_page">
      {alertMsg.show && <AlertComponet />}

      <form onSubmit={signIn}>
        <div className="form_inputs">
          <input placeholder="Email..." name="email" />
          <input placeholder="password..." name="password" />
        </div>

        <button className="singin_btn" type="submit">
          sign in
        </button>
      </form>
    </div>
  );
}
