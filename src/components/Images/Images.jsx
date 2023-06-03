/* eslint-disable react/prop-types */
import styled from '@emotion/styled';
import React from 'react';

const StyledImage = styled.div`
  background-color: #18191a;
  box-shadow: 0 0 10px #000;
  height: 250px;
  width: min(100%, 250px);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 10px;
  margin: 10px auto;

  img {
    width: 100%;
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
