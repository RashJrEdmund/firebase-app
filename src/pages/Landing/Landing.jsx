import React from 'react';
import StyledLanding from './StyledLanding';
import NavBar from '../../components/NavBar/NavBar';
import Footer from '../../components/Footer/Footer';
import AuthGaurd from '../../HOC/AuthGaurd';

function Landing() {
  return (
    <StyledLanding>
      <NavBar />
      <p>Landing page</p>
      <Footer />
    </StyledLanding>
  );
}

export default AuthGaurd(Landing);
