/* eslint-disable react/prop-types */
import styled from '@emotion/styled';
import React from 'react';

const StyledImage = styled.div`
  position: relative;
  background-color: #18191a;
  box-shadow: 0 0 10px #000;
  height: 250px;
  width: min(100%, 250px);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 10px;
  margin: 10px auto 40px;

  img {
    width: 100%;
  }

  p {
    position: absolute;
    bottom: -55px;
    left: 50%;
    transition: 400ms color;
    transform: translate(-50%);

    &:hover {
      color: #1da1f2;
    }
  }

  @media only screen and (max-width: 650px) {
    margin: 10px auto 90px;
  }
`;

export default function Images({ image }) {
  return (
    <StyledImage>
      <img src={image.src} alt={image.title} />
      <p>{image.title}</p>
    </StyledImage>
  );
}
