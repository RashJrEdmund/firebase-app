/* eslint-disable react/prop-types */
import styled from '@emotion/styled';
import React from 'react';

const StyledLoader = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  height: 100vh;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #00000055;
  z-index: 3;

  .message {
    width: min(97vw, 400px);
    height: fit-content;
    min-height: 70px;
    display: flex;
    align-items: center;
    justify-content: center;

    animation: loadingAnime;
    animation-duration: 1.5s;
    animation-iteration-count: infinite;
  }

  @keyframes loadingAnime {
    0% {
      color: #000;
    }
    50% {
      color: #00000084;
    }
    100% {
      color: #0000002b;
    }
  }
`;

export default function Loader({ message }) {
  return (
    <StyledLoader>
      <p className="message">{message || 'Loading...'}</p>
    </StyledLoader>
  );
}
