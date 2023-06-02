/* eslint-disable react/prop-types */
import styled from '@emotion/styled';
import React from 'react';

export default function Movie({ movie }) {
  const StyledMovie = styled.div`
    height: 200px;
    width: 200px;
    border: 1px solid gray;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 20px;
    padding: 10px;
    background-color: #18191a;
    box-shadow: 0 0 10px #000;
    position: relative;

    h2 {
      color: gold;
      text-align: center;
      width: 100%;
    }

    p {
      position: absolute;
      bottom: 0;
      left: 50%;
      transform: translate(-50%);
      color: #f5f5f5;
      margin: 10px 0;
      width: 100%;
      white-space: nowrap;
    }
  `;

  return (
    <StyledMovie>
      <h2>{movie?.title}</h2>

      <p>release Date: {movie?.releaseDate}</p>
    </StyledMovie>
  );
}
